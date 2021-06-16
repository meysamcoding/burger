var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err) throw err
    console.log("you succsefuly connection to the server.");   
     
});
module.exports = connection;