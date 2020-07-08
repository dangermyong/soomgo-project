var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const randomNumber = Math.random().toString();
  res.send(randomNumber);
});

module.exports = router;
