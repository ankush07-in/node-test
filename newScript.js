// Node.js Basics:
// Introduction to Node.js
// Installing Node.js and npm
// Working with modules
// File system operations
// understanding HTTP module

// nodeJS is a JS runtime environment

// node & npm
// working with node and npm

const fs = require('fs');

// writefile
// fs.writeFile("hey.txt", "Hello Ankush", function(err){
//     if(err) console.error(err);
//     else console.log("done");    
// });

// appendfile
// fs.appendFile("hey.txt", ", Hello coder", function(err){
//     if(err) console.error(err);
//     else console.log("done");    
// });

// rename
// fs.rename("hey.txt", "myHey.txt", function(err){
//     if(err) console.error(err);
//     else console.log("file renamed"); 
// });

// copyfile
// fs.copyFile("myHey.txt", "./copy/copy.txt", function(err){
//     if(err) console.error(err);
//     else console.log("copied");
// });

// unlink
// fs.unlink("myHey.txt", function(err){
//     if(err) console.error(err);
//     else console.log("file removed");
// });

// rmdir
fs.rmdir("./copy", {recursive: true}, function(err){
    if(err) console.error(err);
    console.log("removed");
});