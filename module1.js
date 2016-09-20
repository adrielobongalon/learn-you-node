/*
       document : module1.js, for learn-you-node
     created on : monday, september 19, 2016, 22:02 PM
         author : audrey
    description : module file for use in learnyounode, meant to be used by program.js

                                        88
                                        88
                                        88
      ,adPPYYba,  88       88   ,adPPYb,88  8b,dPPYba,   ,adPPYba,  8b       d8
      ""     `Y8  88       88  a8"    `Y88  88P'   "Y8  a8P,,,,,88  `8b     d8'
      ,adPPPPP88  88       88  8b      :88  88          8PP"""""""   `8b   d8'
      88,    ,88  "8a,   ,a88  "8a,   ,d88  88          "8b,   ,aa    `8b,d8'
      `"8bbdP"Y8   `"YbbdP'Y8   `"8bbdP"Y8  88           `"Ybbd8"'      Y88'
                                                                        d8'
                                                                       d8'
*/


// loop-counter and modules
var i = 0;
var fs = require("fs");
var path = require("path");

// used to be "module.exports.getSortedFiles", but learnyounode wants to export only one function
module.exports = function(directory, filetype, callback) {

    var fileList = [];              // list of files in directory
    var filesOfGivenType = [];      // list of files of given filetype in directory

    fs.readdir(directory, sortFiles);   // reads the directory then calls sortFiles()

    function sortFiles(error, data) {
        // if error, early return
        if (error) {
            return callback(error);
        }

        fileList = data;    // store directory items as variable

        // put items with given extension name in array
        // (this is basically the same as using a for-loop like in ex. 5 on program.js)
        filesOfGivenType = fileList.filter(function(filename) {
            return path.extname(filename) === "." + filetype;
            // will return true if equal, false if not
            // see: http://www.w3schools.com/js/js_booleans.asp
        });

        // if above runs successfully, give the callback (from program.js) the data
        callback(null, filesOfGivenType);
    }
};