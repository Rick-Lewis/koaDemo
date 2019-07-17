/**
 * Created by xu.long on 2019/6/9.
 */
// const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const path = require('path');
/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.NODE_ENV;
console.log('env: ' + ENV);
var isProd = ENV === 'production';
var basePlugins = [
  // 此插件在输出目录中
  // 生成 `vue-ssr-client-manifest.json`。
  new VueSSRClientPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../client/index.html'),
    filename: 'index.html'
  })
];
var devPlugins = [];
var prodPlugins = [];

module.exports = merge(baseConfig, {
  entry: { client: path.resolve(__dirname, '../entry-client.js') },
  // module: {
  //   rules: [
  //     {
  //       test: /\.vue$/,
  //       loader: 'vue-loader',
  //       options: {
  //         // enable CSS extraction
  //         extractCSS: isProd
  //       }
  //     },
  //     { // 导入 CSS，例如，import 'foo.css'
  //       test: /\.css$/,
  //       // 重要：使用 vue-style-loader 替代 style-loader
  //       use: isProd
  //         ? ExtractTextPlugin.extract({
  //           use: 'css-loader',
  //           fallback: 'vue-style-loader'
  //         })
  //         : ['vue-style-loader', 'css-loader']
  //     }
  //   ]
  // },
  plugins: isProd ? basePlugins.concat(prodPlugins) : basePlugins.concat(devPlugins),
  optimization: {
    splitChunks: {
      name: 'manifest',
      minChunks: Infinity
    }
  }
});
