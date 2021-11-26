const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

router.get("/index", (req, res) => {
  res.render("index.hbs", {
  title: "index",content1:"Total letures",content2:"Free Lectures",content3:"Today's Lecture",content4:"Arrangement Lecture",value1:"58",value2:"4",value3:"3",value4:"5"
  });
});
router.get("/indexStudent", (req, res) => {
  res.render("indexstudent.hbs", {
    title: "Index",content1:"Total Subject",content2:"Total Classes",content3:"Labs",content4:" Today's Arrangement",value1:"5",value2:"5",value3:"2",value4:"1"
  });
});

router.get("/attendance", (req, res) => {

  res.render("attendance.hbs", {
    title: "attendance"
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
  res.render("calender", {
    title: "calender",
  });
});

router.get("/about", authenticate, (req, res) => {
  console.log("hello i am about");
  res.send(req.UserRoot);
});


router.get("/logout", authenticate, async (req, res) => {
  try {
    res.clearCookie("jwtoken");
    console.log("logout");
   
    res.status(200).render("auth-login");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
