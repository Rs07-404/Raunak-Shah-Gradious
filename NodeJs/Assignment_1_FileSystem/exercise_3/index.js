const fs = require("fs");
const path = require("path");

async function copyFile(fileName, newFile){
    console.log("copying file content.")
    fs.readFile(path.join('lib',fileName), 'utf8', (err, content)=>{
        if(err){
            console.error(`Error reading File ${fileName}: `,err);
            return;
        }
        console.log("Writing File Content")
        fs.writeFile(path.join('lib',newFile), content, {encoding: "utf8"}, (err)=>{
        if(err){
            console.error("Error writing to file: ", err);
            return
        }
        console.log(`${fileName} has been copid to ${newFile}`);
    })
    })
}

copyFile("source.txt","destination.txt")