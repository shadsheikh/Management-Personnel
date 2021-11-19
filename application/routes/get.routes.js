const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");


router.get("/", (req, res) => {
 res.render("index.hbs");
  });
  router.get("/:id/attendance", (req, res) => {
    res.render("attendance");
     });
 
  router.get("/about", authenticate, (req, res) => {
    console.log("hello i am about");
    res.send(req.UserRoot);
});





  module.exports =router;