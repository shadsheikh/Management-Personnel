const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const pool = mysql.createpool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
}).then(()=>{
  console.log("successful")
}).catch((e)=>{
  console.log("not connected")
})


pool.promise();
module.exports = pool;
