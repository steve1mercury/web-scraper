const express = require('express');
const router = express.Router();
const functions = require('../functions');
const fs = require('fs');
const {sep} = require('path');
const request = require('request');

let tmpDir = '';

router.get('/', function(req, res, next) {
  let input = req.query.text;
  res.json({result:  input } );
});

router.post('/', function(req, res, next) {

  console.log("In fetchit.js router.post: req.body = " + JSON.stringify(req.body));
  const urls = req.body;

  fs.mkdtemp(`${__basedir}${sep}fetchdata${sep}`, (err, folder) => {
    if (err) throw err;
    console.log("Saving HTML Files to folder: " + folder);
    urls.forEach(function (url) {
      const p = functions.getHtml(url);
      p
      //.then(ret => console.log(ret.url + ": Successfully fetched " + ret.body.length + " characters of HTML "))
          .then(ret => functions.saveHtml(ret.url, folder, ret.body))
          .then(htmlFile => console.log(htmlFile.filename + " : Characters saved:  " + htmlFile.length ))
          .catch(err => console.log('Error', err.message));
    });

    res.send({message: "Domain Index files saved to " + folder});

  });

});

module.exports = router;
