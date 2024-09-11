const fs = require('fs').promises;
const path = require('path');
const xlsx = require('xlsx');

function xlToJson(fileName){
    const filePath = path.join('lib',fileName);
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = xlsx.utils.sheet_to_json(sheet);
    const formatData = jsonData.map(user=>({
        name: user.Name,
        age: user.Age,
        gender: user.Gender,
        city: user.City
    }));
    const finalData = JSON.stringify(formatData, null, 2);
    console.log("Formated Json Data\n"+finalData);
    fs.writeFile(path.join('lib','marks.json'), finalData, 'utf8');
    console.log('Data Sved in lib/marks.json');
}

xlToJson("marks.xlsx");