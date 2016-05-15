/*
## FILTERED LS (Exercise 5 of 13)

 Create a program that prints a list of files in a given directory,
 filtered by the extension of the files. You will be provided a directory
 name as the first argument to your program (e.g. '/path/to/dir/') and a
 file extension to filter by as the second argument.

 For example, if you get 'txt' as the second argument then you will need to
 filter the list to only files that end with .txt. Note that the second
 argument will not come prefixed with a '.'.

 Keep in mind that the first arguments of your program are not the first
 values of the process.argv array, as the first two values are reserved for
 system info by Node.

 The list of files should be printed to the console, one file per line. You
 must use asynchronous I/O.

─────────────────────────────────────────────────────────────────────────────

## HINTS

 The fs.readdir() method takes a pathname as its first argument and a
 callback as its second. The callback signature is:

    function callback (err, list) {  ...  }

 where list is an array of filename strings.

 Documentation on the fs module can be found by pointing your browser here:
 file://C:\Users\mark\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html

 You may also find node's path module helpful, particularly the extname
 method.

 Documentation on the path module can be found by pointing your browser
 here:
 file://C:\Users\mark\AppData\Roaming\npm\node_modules\learnyounode\node_ap
 idoc\path.html

─────────────────────────────────────────────────────────────────────────────

  » To print these instructions again, run: learnyounode print
  » To execute your program in a test environment, run: learnyounode run

    program.js
  » To verify your program, run: learnyounode verify program.js
  » For help run: learnyounode help

*/

function checkExt(filePath) {
    return filePath.toLowerCase().endsWith(extFilter)
}

function writeElement(element,index) {
    return console.log('[' + pad(index.toString(),2) + ']' + element)
}

function pad(str, max) {
    return str.length < max ? pad("0" + str, max) : str;
}


function callback(err, list) {
    // will be called by the 
    if (err) throw err;
    var matches = list.filter(checkExt)
    console.log("There are " + matches.length + " files name *." + extFilter)
    matches.forEach(writeElement)
}


var fs = require('fs')
var dirPath = process.argv[2]
var extFilter = process.argv[3].toLowerCase()

fs.readdir(dirPath, callback)



