//================module imports ============================
const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
const dotenv = require("dotenv");
const hbs = require("hbs");
const { registerPartials } = require("hbs");
require("./src/db/conn");
//=============laod appplication ============
const app = express();
//=============================== declaration of port ==============================
const port = process.env.Port || 5000;

//======================= setting up path=================================
const staticpath = path.join(__dirname, "./public");
const templatepath = path.join(__dirname, "./templates/views");
const partialpath = path.join(__dirname, "./templates/partials");
const Layoutpath = path.join(__dirname, "./templates/Layouts");
//=========config files ==================
dotenv.config({ path: "./config.env" });
//==========================app paths =======================
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticpath));

//=======================hbs============================
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);
hbs.registerPartials(Layoutpath);
//===========================expresss=================================
app.use(express.json());
//======= Routes ===========================
app.use(require("./routes/post.routes"));


//===============================================PORT  LISTENING ========================================
app.listen(port, () => {
  console.log(
    `the Application started successfully on port ${port} and on http://localhost:${port}`
  );
});


//===========================================extras=======================================================

//middleware
//middleware
// app.use(
//   `/css`,
//   express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css"))
// );
// app.use(
//   `/js`,
//   express.static(path.join(__dirname, "./node_modules/bootstrap/dist/js"))
// );
// app.use(
//   `/jq`,
//   express.static(path.join(__dirname, "./node_modules/jquery/dist"))
// );
// app.use(
//   `/font`,
//   express.static(
//     path.join(__dirname, "./node_modules/@fortawesome/fontawesome-free/css")
//   )
// );
// app.use(
//   `/fontjs`,
//   express.static(
//     path.join(__dirname, "./node_modules/@fortawesome/fontawesome-free/js")
//   )
// );