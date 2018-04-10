// const createApp = require('/path/to/built-server-bundle.js')
const createApp

server.get('*', (req, res) => {
  const context = {url: req.url}
  createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        // handle err
      } else {
        res.end(html)
      }
    })
  })
})