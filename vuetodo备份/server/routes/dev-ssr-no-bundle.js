const path = require('path')
const Router = require('koa-router')
const axios = require('axios')
const fs = require('fs')
const MemoryFS = require('memory-fs')
const webpack = require('webpack')
const VueServerRenderer = require('vue-server-renderer')

const serverRender = require('./server-render')
const serverConfig = require('../../build/webpack.config.server')

// 直接在服务端将 webpack 跑起来
const serverCompiler = webpack(serverConfig)

// 指定webpack的compiler的输出目录在memory-fs里(内存中)
const mfs = new MemoryFS()
serverCompiler.outputFileSystem = mfs

// 记录webpack每次打包生成的新的文件
let bundle

// watch就是文件操作的watch，当修改文件后 重新执行打包
serverCompiler.watch({}, (err, stats) => {
  // 处理错误，和错误信息
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach(e => console.log(err))
  stats.warnings.forEach(warn => console.warn(warn))

  const bundlePath = path.join(
    serverConfig.output.path,
    'vue-ssr-server-bundle.json'
  )
  // mfs.readFileSync(bundlePath, 'utf-8') 输出一个字符串
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
  console.log('new bundle generated')
})

const handleSSR = async (ctx) => {
  if (!bundle) {
    ctx.body = 'wait a moment ... '
    return
  }
  const clientManifestResp = await axios.get(
    'http://127.0.0.1:8080/public/vue-ssr-client.manifest.json'
  )
  // clientManifestResp 执行后 返回promise从中拿到data数据
  // 这个data将传入 VueServerRenderer的 bundle 配置中
  const clientManifest = clientManifestResp.data

  const template = fs.readFileSync(
    path.join(__dirname, '../templates/index.ejs'),
    'utf-8'
  )
  const renderer = VueServerRenderer.createBundleRenderer(
    bundle, {
      inject: false, // 不执行默认注入操作
      clientManifest
    }
  )

  await serverRender(ctx, renderer, template)
}

const router = new Router()
router.get('*', handleSSR)

module.exports = router
