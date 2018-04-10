const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge') // 根据不同配置项合理地合并webpack配置
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const VueClientPlugin = require('vue-server-renderer/client-plugin')

const isDev = process.env.NODE_ENV === 'development'

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'template.html')
  }),
  // 会自动生成一个文件 vue-ssr-client.manifest.json
  new VueClientPlugin()
]

const devServer = {
  port: 8080,
  host: 'http://127.0.0.1',
  hot: true,
  open: true,
  overlay: {
    errors: true
  },
  historyApiFallback: {
    index: '/index.html'
  }
}

let config

if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
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
              loader: 'css-loader',
              options: {
                module: true, // 开启CSS Module
                localIdentName: isDev ? '[name]-[hash:base64:4]' : ['hash:base64:6']
              }
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
    devServer,
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../src/client-entry.js'),
      vendor: ['vue']
    },
    output: {
      filename: '[name].[chunkhash:8].js',
      publicPath: '/public/'
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
              options: {
                sourceMap: true,
              }
            },
            'stylus-loader'
          ]
        })
      }
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk: true
    },
    plugins: defaultPlugins.concat([
      new ExtractPlugin('styles.[contentHash:8].css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      }),
      new webpack.NamedChunksPlugin()
    ])
  })
}

config.resolve = {
  alias: {
    'model': path.join(__dirname, '../client/model/client-model.js')
  }
}

module.exports = config
