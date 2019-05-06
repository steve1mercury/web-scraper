const request = require('request');
const fs = require('fs');
let tmpDir = '';
global.__basedir = __dirname;

const urls = ['http://www.yahoo.com',
    'http://www.google.com', 'http://www.irs.gov',
    'http://www.ibm.com', 'http://www.marcaria.com',
    'http://www.visionpharma.com', 'http://www.siebel-crm.net',
    'http://www.adriaticapress.it', 'http://www.zoncinta.com',
    'http://www.pricerabbit.com'];

const functions = require('./functions');

//console.log("In gethtml.js : urls = " + JSON.stringify(urls));

const {sep} = require('path');

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
});




