/**
 * Created by xu.long on 2019/6/9.
 */
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.config.js');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const path = require('path');
/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.NODE_ENV;
console.log('env: ' + ENV);
var isProd = ENV === 'production';
var basePlugins = [
  new VueSSRServerPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../server/index.ssr.html'),
    filename: 'index.ssr.html',
    files: {
      js: 'script/client.bundle.js'
    },
    excludeChunks: ['server']
  })
];
var devPlugins = [];
var prodPlugins = [];

module.exports = merge(baseConfig, {
  // 将 entry 指向应用程序的 server entry 文件
  entry: { server: path.resolve(__dirname, '../entry-server.js') },
  // 这允许 webpack 以 Node 适用方式(Node-appropriate fashion)处理动态导入(dynamic import)，
  // 并且还会在编译 Vue 组件时，
  // 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
  target: 'node',
  // 对 bundle renderer 提供 source map 支持
  // devtool: 'source-map',
  // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
  output: {
    libraryTarget: 'commonjs2'
  },
  // https://webpack.js.org/configuration/externals/#function
  // https://github.com/liady/webpack-node-externals
  // 外置化应用程序依赖模块。可以使服务器构建速度更快，
  // 并生成较小的 bundle 文件。
  // externals: [path.resolve(__dirname, '../views/*'), nodeExternals({
  //   // 不要外置化 webpack 需要处理的依赖模块。
  //   // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
  //   // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
  //   whitelist: [/\.css$/, /\.vue$/]
  // })],
  externals: nodeExternals({
    // 不要外置化 webpack 需要处理的依赖模块。
    // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
    // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
    whitelist: /\.css$/
  }),
  // 这是将服务器的整个输出
  // 构建为单个 JSON 文件的插件。
  // 默认文件名为 `vue-ssr-server-bundle.json`
  plugins: isProd ? basePlugins.concat(prodPlugins) : basePlugins.concat(devPlugins)
});
