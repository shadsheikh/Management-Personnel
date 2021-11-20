const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");


router.get("/", (req, res) => {
 res.render("index.hbs");
  });
  router.get("/attendance", (req, res) => {
    res.render("attendance.hbs");
     });

     router.get("/auth-forgot-password", (req, res) => {
      res.render("auth-forgot-password");
       });

       router.get("/login", (req, res) => {
        res.render("auth-login");
         });
         router.get("/signup", (req, res) => {
          res.render("auth-register");
           });

           router.get("/profile", (req, res) => {
            res.render("features-profile");
             });

             router.get("/syllabustrack", (req, res) => {
              res.render("SyllabusTrack");
               });
 
  router.get("/about", authenticate, (req, res) => {
    console.log("hello i am about");
    res.send(req.UserRoot);

});





  module.exports =router;