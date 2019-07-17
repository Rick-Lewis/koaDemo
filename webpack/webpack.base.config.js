/**
 * Created by xu.long on 2019/5/24.
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.NODE_ENV;
console.log('env: ' + ENV);
var isProd = ENV === 'production';
var basePlugins = [
  new VueLoaderPlugin()
];
var devPlugins = [];
var prodPlugins = [new ExtractTextPlugin({ filename: 'common.[chunkhash].css' })];
module.exports = {
  // entry: { app: './app.js' },
  resolve: {
    extensions: ['.js', '.vue']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'script/[name].bundle.js'
  },
  mode: ENV,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // enable CSS extraction
          extractCSS: isProd
        }
      },
      { // 导入 CSS，例如，import 'foo.css'
        test: /\.css$/,
        // 重要：使用 vue-style-loader 替代 style-loader
        use: isProd
          ? ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: 'vue-style-loader'
          })
          : ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        // 重要：使用 vue-style-loader 替代 style-loader
        use: isProd
          ? ExtractTextPlugin.extract({
            use: ['css-loader', 'sass-loader'],
            fallback: 'vue-style-loader'
          })
          : ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000    // 10Kb
          }
        }
      }
    ]
  },
  // module: {
  //   rules: [{
  //     test: /\.js?$/,
  //     loader: ['babel-loader']
  //   }, {
  //     test: /\.ejs$/,
  //     loader: ['ejs-loader']
  //   }]
  // },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         name: 'commons',
  //         chunks: 'initial',
  //         minChunks: 2
  //       }
  //     }
  //   },
  //   minimize: false
  // },
  // plugins: []
  plugins: isProd ? basePlugins.concat(prodPlugins) : basePlugins.concat(devPlugins)
};
