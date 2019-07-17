/**
 * Created by xu.long on 2019/6/9.
 */
const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const fs = require('fs');
const koaStatic = require('koa-static');
const { createBundleRenderer } = require('vue-server-renderer');
const login = require('./routes/login/index');
const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.ssr.html'), 'utf-8');
const serverBundle = require(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'));
const clientManifest = require(path.resolve(__dirname,'../dist/vue-ssr-client-manifest.json'));

/**
 * 服务器ssr服务和服务器api服务
 */
const server = new Koa();
const router = new Router();
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template, // （可选）页面模板
  clientManifest // （可选）客户端构建 manifest
});
router.get('/index', (ctx, next) => {
  console.log('server router.get');
  const context = {
    title: '服务端渲染', // {{title}}
    url: ctx.url
  };
  return renderer.renderToString(context).then(res => {
    console.log('server router.get renderer.renderToString success', res);
    ctx.body = res;
    return next();
  }, err => {
    console.log('server router.get renderer.renderToString failure', err);
  });
});
//处理post请求，注意加载顺序要提前加载
server.use(bodyParser());
//加载路由中间件
server.use(router.routes()).use(router.allowedMethods()).use(login.routes());
// 配置静态web服务的中间件
server.use(koaStatic(path.resolve(__dirname, '../dist')));

if (!module.parent) {
  server.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
  });
}

/**
 * 客户端静态页面渲染服务
 */
const clientTemplate = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
const client = new Koa(); // pure client render
const clientRouter = new Router();
clientRouter.get('/index', (ctx, next) => {
  ctx.type = 'html';
  ctx.status = 200;
  ctx.body = clientTemplate;
});
client.use(clientRouter.routes()).use(clientRouter.allowedMethods());
client.use(koaStatic(path.resolve(__dirname, '../dist')));
if (!module.parent) {
  client.listen(3001, () => {
    console.log('client is running at http://localhost:3001');
  });
}