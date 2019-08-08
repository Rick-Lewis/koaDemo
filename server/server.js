/**
 * Created by xu.long on 2019/6/9.
 */
const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const fs = require('fs');
const koaStatic = require('koa-static');
const login = require('./routes/home/index');
const staticPage = require('./routes/staticPage/index');
/**
 * 服务器ssr服务和服务器api服务
 */
const server = new Koa();
const router = new Router();

//处理post请求，注意加载顺序要提前加载
server.use(bodyParser());
//加载路由中间件
server.use(router.routes()).use(router.allowedMethods()).use(login.routes()).use(staticPage.routes());
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