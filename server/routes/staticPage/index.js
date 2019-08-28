/*
 * @Author: xu.long
 * @Date: 2019-08-07 15:12:47
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-08-09 14:02:20
 */
const fs = require("fs");
const path = require("path");
const Router = require("koa-router");
const { createBundleRenderer } = require("vue-server-renderer");

const template = fs.readFileSync(
  path.resolve(__dirname, "../../../dist/index.ssr.html"),
  "utf-8"
);
const serverBundle = require(path.resolve(
  __dirname,
  "../../../dist/vue-ssr-server-bundle.json"
));
const clientManifest = require(path.resolve(
  __dirname,
  "../../../dist/vue-ssr-client-manifest.json"
));

const staticPage = (module.exports = new Router({
  prefix: "/staticPage"
}));

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template, // （可选）页面模板
  clientManifest // （可选）客户端构建 manifest
});
const renderHtmlTemp = async (ctx, next) => {
    console.log("staticPage router.get", ctx);
    const context = {
      url: ctx.url, //必须，否则会报错
      title: "服务端渲染", // {{title}}
      baseUrl: "http://localhost:3000"
    };
    let result = await new Promise((resolve, reject) => {
      renderer.renderToString(context).then(
        res => {
          let temp = {
            type: "html",
            status: 200,
            body: res
          };
          resolve(temp);
        },
        err => {
          let temp = {
            type: "html",
            status: 500,
            body: "500 Internal Server Error"
          };
          reject(temp);
        }
      );
    });
    console.log(
      "staticPage router.get renderer.renderToString result",
      JSON.stringify(result)
    );
    ctx.type = result.type;
    ctx.status = result.status;
    ctx.body = result.body;
  }
staticPage.get("/addRecord", renderHtmlTemp);
staticPage.get("/home", renderHtmlTemp);
