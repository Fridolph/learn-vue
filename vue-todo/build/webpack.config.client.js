const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge') // 根据不同配置项合理地合并webpack配置
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'
let config

const devServer = {
  port: 8000,
  host: 'localhost',
  hot: true,
  open: true,
  overlay: {
    errors: true,
  }
}

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HtmlWebpackPlugin({
    app: '../index.html'
  })
]

if (isDev) {
  config = merge(baseConfig, {
    output: {
      filename: 'bundle.[hash:8].js',
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                module: true, // 开启CSS Module
                localIdentName: isDev ? '[name]-[hash:base64:4]' : ['hash:base64:6'], 
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    devtool: '#cheap-module-eval-source-map',
    devServer,
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../src/index.js'),
      vendor: ['vue']
    },
    output: {      
      filename: '[name].[chunkhash:8].js',
    },
    rules: [
      {
        test: /\.styl$/,
        use: ExtractPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              // options: {
              //   sourceMap: true,
              // }
            },
            'stylus-loader'
          ]
        })
      }
    ],
    plugins: defaultPlugins.concat([
      new ExtractPlugin('styles.[contentHash:8].css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      })
    ])
  })
}

module.exports = config
