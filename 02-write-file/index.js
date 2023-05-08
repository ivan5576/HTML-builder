let fs = require('fs');
const process = require('node:process');
const path = require('node:path');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Write something, please:`, inputText => {
    
    // console.log(`Thanks!`);
    // readline.close();
  });

fs.writeFile(path.join('02-write-file', 'userText.txt'), inputText, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });


