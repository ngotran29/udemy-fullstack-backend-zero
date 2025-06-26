const connection = require("../config/database"); // import connection to db

const getHomepage = async (req, res) => {
  let [results, fields] = await connection.query(`SELECT * FROM Users;`);
  console.log(">>> check results: ", results);
  return res.render("home.ejs", { listUsers: results });
};

const renderSample = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  console.log(">>> email: ", email, "name: ", name, "city: ", city);

  let [results] = await connection.query(
    `INSERT INTO 
    Users (email, name, city)
    VALUES (?,?,?);`,
    [email, name, city]
  );

  console.log("check results", results);
  res.send("Create user successfully!");
};
const getCreateUser = (req, res) => {
  res.render("create.ejs");
};
module.exports = {
  getHomepage,
  renderSample,
  postCreateUser,
  getCreateUser,
};
