const fs = require('fs')
const path = require('path')

module.exports = function (app) {
  app.get('/', (req, res) => { 
    res.send(fs.readFileSync(path.join(process.cwd(), 'page', 'index.html')).toString())
  })
  app.get('/home', (req, res) => {
    res.send({ data: 'Hello Home!' })
  })
}