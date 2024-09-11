const fs = require("fs").promises
const path = require('path');

async function addTimestamp(filename){
    try{
        const filepath = path.join('lib',filename);
        const newfilePath = path.join('lib',"new.log")
        const content = await fs.readFile(filepath, 'utf8');
        const date = new Date();
        const month = date.toLocaleString('en-GB',{month:'short'})
        const day = date.toLocaleString('en-GB',{day: '2-digit'});
        const year = date.toLocaleString('en-GB',{year: 'numeric'});
        const hours = date.getHours()
        const minutes = date.toLocaleString('en-GB',{minute: '2-digit'});
        const seconds = date.toLocaleString('en-GB',{second: '2-digit'});
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const timestamp = `${day}-${month}-${year} ${hours % 12 || 12}:${minutes}:${seconds} ${ampm}`;
        const lines = content.split('\n');
        const timeStampedlines = lines.map(line => `${timestamp} ${line}`);
        const newContent = timeStampedlines.join('\n');
        await fs.writeFile(newfilePath, newContent, {encoding:'utf8'});
    }
    catch (err){
        console.error(`Error: `, err);
    }
}

addTimestamp("debug.log");