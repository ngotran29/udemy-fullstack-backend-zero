
require('dotenv').config()
const express = require('express') //commonjs
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database') //import connection to db
// console.log(">>> check env: ", process.env); //run de check thong tin moi truong

const app = express() //app express
const port = process.env.PORT || 8888;// port
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);


//khai bao route
app.use('/', webRoutes);


//test connect db


//simple query
connection.query(
  'SELECT * FROM Users',
  function (error, results, fields) {
    if (error) {
      console.error('Lỗi truy vấn:', error.message);
      return;
    }
    console.log('>>> Results=', results);
  }
);


app.listen(port, hostname,() => {
  console.log(`Example app listening on port ${port}`)
})