const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "fatotaku978fatotaku978",
  database: "1081-1b"
});

// Testing database connection
// pool.query("SELECT * FROM midterm", function(err, results) {
//   console.log(JSON.stringify(results)); // results contains rows returned by server
//   console.log("===========================");
// });
module.exports = pool.promise();