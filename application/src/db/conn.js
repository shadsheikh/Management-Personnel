// const mysql = require("mysql2");

// const conn = mysql
//   .createConnection({
//     host: "localhost", // HOST NAME
//     user: "root", // USER NAME
//     database: "personel__management", // DATABASE NAME
//     password: "", // DATABASE PASSWORD
//   })
//   .on("error", (err) => {
//     console.log("Failed to connect to Database");
//     // console.log("Failed to connect to Database",err);
//   });

// module.exports = conn;


const mongoose = require("mongoose");
const DB = process.env.DATABASE;
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log("no connection"));