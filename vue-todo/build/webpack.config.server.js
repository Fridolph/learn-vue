const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge') // 根据不同配置项合理地合并webpack配置
const baseConfig = require('./webpack.config.base')

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  })
]

let config

config = merge(baseConfig, {
  target: 'node',
  entry: path.join(__dirname, '../src/server.entry.js'),
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
        use: [
          'style-loader',
          {
            loader: 'css-loader'
            // options: {
            //   module: true, // 开启CSS Module
            //   localIdentName: isDev ? '[name]-[hash:base64:4]' : ['hash:base64:6']
            // }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    // import Vue from 'vue'
    alias: {
      'vue$': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin()
    // new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config
