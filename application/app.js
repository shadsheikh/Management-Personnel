const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
const dotenv = require("dotenv");
const hbs = require("hbs");
const { registerPartials } = require("hbs");
require("./src/db/conn");

const app = express();

const port = process.env.Port || 5000;

//setting up path
const staticpath = path.join(__dirname, "./public");
const templatepath = path.join(__dirname, "./templates/views");
const partialpath = path.join(__dirname, "./templates/partials");
dotenv.config({ path: "./config.env" });
//middleware
//middleware
app.use(
  `/css`,
  express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css"))
);
app.use(
  `/js`,
  express.static(path.join(__dirname, "./node_modules/bootstrap/dist/js"))
);
app.use(
  `/jq`,
  express.static(path.join(__dirname, "./node_modules/jquery/dist"))
);
app.use(
  `/font`,
  express.static(
    path.join(__dirname, "./node_modules/@fortawesome/fontawesome-free/css")
  )
);
app.use(
  `/fontjs`,
  express.static(
    path.join(__dirname, "./node_modules/@fortawesome/fontawesome-free/js")
  )
);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);

//routing
//app.get(path,callback)
app.get("/", (req, res) => {
  res.render("index.hbs");
});


app.listen(port, () => {
  console.log(`the Application started successfully on port ${port} and on http://localhost:${port}`);
});
