/*
       document : program.js, for learn-you-node
     created on : before summer of 2016 (date and time unknown)
         author : audrey
    description : to be run by learnyounode. un-comment each example as needed

                               ___
                              /\  \
      ______    ___  ___      \_\  \    ______    ______   ___  ___
     /  __  \  /\  \/\  \    /  __  \  /\   __\  /  __  \ /\  \/\  \
    /\  \L\  \ \ \  \_\  \  /\  \L\  \ \ \  \_/ /\   ___/ \ \  \_\  \
    \ \___/\__\ \ \___/\__\ \ \___/\__\ \ \__\  \ \_____\  \ \____   \
     \/__/\/__/  \/___/\__/  \/___/\__/  \/__/   \/_____/   \/___/_\  \
                                                               /\_____/
                                                               \/____/
*/


// terminal colours:
// green: #66ff66
// purple: b700b7
// black-bg: #141414
// white-highligh: #373737




/* /##   /##    ##                         /##    ###  /###     /##    
  / ### / ###  ####                       / ###  / ###/ ####   / ###   
 /   ###   ### /####                     /   ###/   ##   ###  /   ###  
##    ###   ##/  ##                     ##    ##    ##    ## ##    ### 
########     /##                        ##    ##    ##    ## ########  
#######     / ###                       ##    ##    ##    ## #######   
##         /   ###                      ##    ##    ##    ## ##        
###     / /     ###      #              ##    ##    ##    ## ###     / 
 ######/ /       ### /  ###              ######     ###   ### ######/  
  ##### /         ##/    #                ####       ###   ### #####            */


// console.log("HELLO WORLD");




// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------




/*                                          #
                                           ##    ##
                                           ##    ##
   /##   /##    ##                       ######## ##    ###    ####      /##
  / ### / ###  ####                     ########   ##    ###     ###    / ###
 /   ###   ### /####                       ##      ##     ###     ###  /   ###
##    ###   ##/  ##                        ##      ##      ##      ## ##    ##
########     /##                           ##      ##      ##      ## ##    ##
#######     / ###                          ##      ##      ##      ## ##    ##
##         /   ###                         ##      ##      ##      ## ##    ##
###     / /     ###      #                 ##      ##      /#      /  ##    ##
 ######/ /       ### /  ###                ##       ######/ ######/    ######
  ##### /         ##/    #                  ##       #####   #####      ####    */


// var i;
// // console.log(+process.argv[2]);

// var numbers = [];

// for (i = 2; i < process.argv.length; i++) {
//     // console.log(+process.argv[i]);        // the "+" in front converts it to a number
//     numbers.push(+process.argv[i]);
// }
// // console.log(numbers.length);

// var total = 0;
// for (i = 0; i < numbers.length; i++) {
//     total += numbers[i];
// }
// // console.log(process.argv);
// console.log(total);




// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------




/*                                                #
                                            #     ##
                                           ##     ##
                                           ##     ##
   /##   /##    ##                       ######## ##  /## ###  /###    /##       /##
  / ### / ###  ####                     ########  ## / ### ###/ ####  / ###     / ###
 /   ###   ### /####                       ##     ##/   ### ##   ### /   ###   /   ###
##    ###   ##/  ##                        ##     ##     ## ##      ##    ### ##    ###
########     /##                           ##     ##     ## ##      ########  ########
#######     / ###                          ##     ##     ## ##      #######   #######
##         /   ###                         ##     ##     ## ##      ##        ##
###     / /     ###      #                 ##     ##     ## ##      ###     / ###     /
 ######/ /       ### /  ###                ##     ##     ## ###      ######/   ######/
  ##### /         ##/    #                  ##     ##    ##  ###      #####     #####      */


// var fs = require("fs");

// // prints the file path to the console log
// // console.log("filepath: " + process.argv[2] + "\n");

// var fileContents = fs.readFileSync(process.argv[2]);    // variable for the buffer for the file
// var fileAsString = fileContents.toString();             // creates a string from the buffer
// // console.log(fileAsString);

// // note that "\n" is the delimiter
// var fileAsArray = fileAsString.split("\n");             // creates an array, each item is a paragraph
// // console.log(fileAsArray);

// var numberOfNewLines = fileAsArray.length - 1;
// console.log(numberOfNewLines);




// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------



/*                                         /##
                                         #/ ###
                                        ##   ###
                                        ##
                                        ##
   /##   /##    ##                      ###### /###   ##   ####    ###  /###
  / ### / ###  ####                     ##### / ###  / ##    ###  / ###/ ####
 /   ###   ### /####                    ##   /   ###/  ##     ###/   ##   ###
##    ###   ##/  ##                     ##  ##    ##   ##      ##    ##
########     /##                        ##  ##    ##   ##      ##    ##
#######     / ###                       ##  ##    ##   ##      ##    ##
##         /   ###                      ##  ##    ##   ##      ##    ##
###     / /     ###      #              ##  ##    ##   ##      /#    ##
 ######/ /       ### /  ###             ##   ######     ######/ ##   ###
  ##### /         ##/    #               ##   ####       #####   ##   ###       */


// // fs module and file as variables
// var fs = require("fs");
// var file = process.argv[2];

// // reads the file, then callback to finishedReading()
// fs.readFile(file, "utf8", finishedReading); 

// /* see: https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback

// The callback is passed two arguments (error, data), where data is the contents
// of the file. If no encoding is specified, then the raw buffer is returned. */

// // checks for an error, hen uses printLinesAmount() to print the lines
// function finishedReading(error, fileData) {
//     if (error) {
//         return console.error("bleh - " + error);
//     }
//     printLinesAmount(fileData);
// }

// // takes the text and logs the amount of lines
// function printLinesAmount(words) {
//     var fileAsString = words;
//     var fileAsArray = fileAsString.split("\n");
//     var numberOfNewLines = fileAsArray.length - 1;

//     console.log(numberOfNewLines);
// }




// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------




/*                                         /##
                                         #/ ###   #
                                        ##   ### ###
                                        ##        #  ##
                                        ##           ##
   /##   /##    ##                      ######  ###   ##    ###      /##
  / ### / ###  ####                     #####    ###   ##    ###    / ###
 /   ###   ### /####                    ##        ##   ##     ###  /   ###
##    ###   ##/  ##                     ##        ##   ##      ## ##    ###
########     /##                        ##        ##   ##      ## ########
#######     / ###                       ##        ##   ##      ## #######
##         /   ###                      ##        ##   ##      ## ##
###     / /     ###      #              ##        ##   ##      /  ###     /
 ######/ /       ### /  ###             ##        ### / ######/    ######/
  ##### /         ##/    #               ##        ##/   #####      #####       */


// // loop-counter and modules
// var i = 0;
// var fs = require("fs");
// var path = require("path");

// // directory and filetype to sort by
// var directory = process.argv[2];
// var filetype = "." + process.argv[3];   // argument doesn't contain "."

// var fileList = [];              // list of files in directory
// var filesOfGivenType = [];      // list of files of given filetype in directory

// // console.log(directory + "\n" + filetype + "\n\n");

// fs.readdir(directory, sortFiles);   // reads the directory then calls sortFiles()

// function sortFiles(error, data) {
//     // handles errors
//     if (error) {
//         return console.error("bleh - " + error);
//     }

//     fileList = data;    // store directory items as variable

//     // put items with given extension name in array
//     for (i = 0; i < fileList.length; i++) {
//         if (path.extname(fileList[i]) == filetype) {
//             filesOfGivenType.push(fileList[i]);
//         }
//     }

//     // log all items in array
//     for (i = 0; i < filesOfGivenType.length; i++) {
//         console.log(filesOfGivenType[i]);
//     }
// }




// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------




/*                                                  #
                                                   ###
                                                    #

   /##   /##    ##                         /###   ###     /##    ##
  / ### / ###  ####                       / #### / ###   / ###  ####
 /   ###   ### /####                     ##  ###/   ##      ### /####
##    ###   ##/  ##                     ####        ##       ##/  ##
########     /##                          ###       ##        /##
#######     / ###                           ###     ##       / ###
##         /   ###                            ###   ##      /   ###
###     / /     ###      #              ###    ##   ##     /     ###
 ######/ /       ### /  ###              ####  /    ### / /       ### /
  ##### /         ##/    #                 ###/      ##/ /         ##/          */


// loop-counter and modules
var i = 0;
var module = require("./module1.js");   // ".js" is optional and can be omitted

// directory and filetype to sort by
var directory = process.argv[2];
var filetype = process.argv[3];

// call function from module1.js
module(directory, filetype, printFiles);
// used to be "module.getSortedFiles", but learnyounode wants only one function exported

// run after getSortedFiles() is complete
function printFiles(error, data) {
    if (error) {
        return console.error(error);    // should say: "bleh (from module1.js) - <error here>"
    }

    // logs all items in array (passed from getSortedFiles function)
    for (i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}




// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------




// note:
// for the ascii text, http://www.network-science.de/ascii/
// use calgphy2
// put four spaces between each word
// remember to set the width to a really big number

/*

monte
woompa
strong demeter

strong naz
maxi
stanya

stein *s
spyro
weak demeter

alex *
rachel
robin hood

crow *
giparang
sasquatch

prestina for all

*/