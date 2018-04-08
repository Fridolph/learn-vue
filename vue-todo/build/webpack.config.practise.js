const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge') // 根据不同配置项合理地合并webpack配置
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const devServer = {
  port: 8081,
  host: 'localhost',
  hot: true,
  open: true,
  overlay: {
    errors: true
  }
}

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'template.html')
  })
]

let config

config = merge(baseConfig, {
  entry: path.join(__dirname, '../practise/index.js'),
  output: {
    filename: 'bundle.[hash:8].js'
  },
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
  devtool: '#cheap-module-eval-source-map',
  resolve: {
    // import Vue from 'vue'
    alias: {
      'vue$': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  devServer,
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin()
    // new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config
