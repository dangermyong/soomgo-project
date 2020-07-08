var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index.ejs", { title: "Express" });
});

router.get("/user_signup", function (req, res, next) {
  res.render("user_signup.ejs", { title: "Express" });
});

module.exports = router;
