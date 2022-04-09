const express = require('express');
const app = express();
const port = 8070

const createRouter = require('./app/router')

createRouter(app)
app.listen(port, () => {
  console.log('http://localhost:' + port);
})