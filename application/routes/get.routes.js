const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

router.get("/index", (req, res) => {
  res.render("index.hbs", {
    title: "index",
  });
});
router.get("/attendance", (req, res) => {
  res.render("attendance.hbs",{
    title:"attendance"
  });
});

router.get("/auth-forgot-password", (req, res) => {
  res.render("auth-forgot-password");
});

router.get("/", (req, res) => {
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

router.get("/calender", (req, res) => {
<<<<<<< HEAD
  res.render("calender.hbs");
=======
  res.render("calender",{
    title:"calender"
  });
>>>>>>> 9c4f510acca758b40eb2fff9ddaaf75acb1507ee
});


router.get("/about", authenticate, (req, res) => {
  console.log("hello i am about");
  res.send(req.UserRoot);
});

module.exports = router;
