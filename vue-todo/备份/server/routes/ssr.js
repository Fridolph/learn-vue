const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const VueServerRenderer = require('vue-server-renderer')
const serverRender = require('./server-render')
const clientManifest = require('../../public/vue-ssr-client-manifest.json')
const renderer = VueServerRenderer.createBundleRenderer(
  path.join(__dirname, '../../server-build/vue-ssr-server-bundle.json'),
  {
    inject: false,
    clientManifest
  }
)

const template = fs.readFileSync(
  path.join(__dirname, '../templates/index.ejs'),
  'utf-8'
)

const pageRouter = new Router()

pageRouter.get('*', async ctx => {
  await serverRender(ctx, renderer, template)
})
