var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("welcome to cards");
});

router.get("/anotherurl", function (req, res, next) {
  res.send("Hello cards anotherurl");
});

module.exports = router;
