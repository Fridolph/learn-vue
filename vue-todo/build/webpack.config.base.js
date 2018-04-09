const path = require('path')
// const webpack = require('webpack')
const createVueLoaderOpts = require('./vue-loader.config')

const isDev = process.env.NODE_ENV === 'development'

const baseConfig = {
  mode: process.env.NODE_ENV || 'production', // 只接受 development 或 production
  target: 'web',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  module: {
    rules: [
      // 配置eslint
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre' // 预处理
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderOpts(isDev)
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = baseConfig
