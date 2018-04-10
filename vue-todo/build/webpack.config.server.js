const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge') // 根据不同配置项合理地合并webpack配置
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const VueServerPlugin = require('vue-server-renderer/server-plugin') // Vue服务端渲染必用插件

let config

config = merge(baseConfig, {
  target: 'node',
  entry: path.join(__dirname, '../src/server.entry.js'),
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server.entry.js',
    path: path.join(__dirname, '../server-build')
  },
  // 声明externals 不打包 vue vuex vue-router等依赖
  externals: Object.keys(require('../package').dependencies),
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractPlugin('styles.[contentHash:8].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    })
  ]
})

const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
  config.plugins.push(new VueServerPlugin())
}

config.resolve = {
  alias: {
    'model': path.join(__dirname, '../client/model/server-model.js')
  }
}

module.exports = config
