require('dotenv').config()
const express = require('express') //commonjs
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
// console.log(">>> check env: ", process.env); //run de check thong tin moi truong

const app = express() //app express
const port = process.env.PORT || 8888;// port
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);


//khai bao route
app.use('/', webRoutes);

app.listen(port, hostname,() => {
  console.log(`Example app listening on port ${port}`)
})