const request = require("request");
const fs = require("fs");
const {sep} = require('path');

function getHtml(url) {
    //console.log("In functions getHtml: url = " + url);
    return new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error) {
                console.log("Error: " + error);
            }
            //console.log("In functions getHtml: Status code: " + response.statusCode);
            resolve({url: url, body: body});
        });
    });
}

function saveHtml(url, path,  body) {

    const fname = `${path}${sep}${getHostName(url)}.htm`;
    //console.log("In functions saveHtml: url = " + url + " Path : " + path + "FileName: " + fname + " Body length: " + body.length);
    //console.log("In functions saveHtml: file_name = " + fname);

    return new Promise((resolve, reject) => {
        fs.writeFile(fname, body, error_file => {
            if (error_file)
                return reject(error_file);
            resolve({path: path, filename: fname, length: body.length});
        })
    });

}

function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
    }
    else {
        return null;
    }
}

module.exports.getHtml = getHtml;
module.exports.saveHtml = saveHtml;





