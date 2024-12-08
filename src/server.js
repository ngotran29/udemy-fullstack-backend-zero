const express = require('express') //commonjs
const path = require('path') //commonjs

require('dotenv').config()
console.log(">>> check env: ", process.env); //run de check thong tin moi truong

const app = express() //app express
const port = process.env.PORT || 8888;// port
const hostname = process.env.HOST_NAME;
//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
//khai bao route
app.get('/', (req, res) => {
  res.render('sample.ejs')
})

app.get('/abc', (req, res) => {
  res.render('hi')
})

app.listen(port, hostname,() => {
  console.log(`Example app listening on port ${port}`)
})