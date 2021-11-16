const mysql = require("mysql2");
try {
  const db_connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "personel__management",
    password: "",
  });
 
} catch (err) {
  console.log(err);
}
