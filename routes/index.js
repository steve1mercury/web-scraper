var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web Scraper', instructions: "Enter URL's (Fully Qualified) then press ENTER", status: "Results go here" });
});

module.exports = router;
