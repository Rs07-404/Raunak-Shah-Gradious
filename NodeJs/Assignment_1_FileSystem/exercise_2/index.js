/* Simply type one of the following in console/ Terminal to run this file
    1. 'npm start'
    OR
    2. Node index.js

    --Raunak Shah
*/
const fs = require('fs')
const path = require('path')

const asciiRanges = [[48,57],[65,90],[97,122]];
function createRandomWord(length){
    let result = '';
    for(let i = 0; i < length; i++){
        const range = asciiRanges[Math.floor(Math.random() * asciiRanges.length)];
        result += String.fromCharCode(Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0]);
    }
    return result;
}

function createRandomWordFile(number){
    const filepath = path.join('', 'lib', 'random-words.txt')
    const words = []
    for (let i = 0; i < number; i++){
        words.push(createRandomWord(10));
    }
    fs.writeFile(filepath, words.join('\n'),{encoding: "utf8"}, (err)=>{
        if (err){
            console.error(`Error writing to file`, err)
        }else{
            console.log(`random-words.txt has been created with 100 random words.`);
        }
    })
}

createRandomWordFile(100);