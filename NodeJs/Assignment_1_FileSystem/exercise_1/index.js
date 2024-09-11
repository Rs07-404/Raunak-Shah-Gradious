/* Simply type one of the following in console/ Terminal to run this file
    1. 'npm start'
    OR
    2. Node index.js

    --Raunak Shah
*/
const fs = require('fs')
const path = require('path')

function getFileContent(file){
    const filepath = path.join('', 'lib', file)
    fs.readFile(filepath, 'utf8', (err, data)=>{
        if (err){
            console.error(`Error reading file ${file}`, err)
        }else{
            console.log(`Content of ${file}: \n${data}`);
        }
    })
}

getFileContent('readme.txt');
getFileContent('students.csv');
getFileContent('index.html');