const fs = require('fs').promises;
const path = require('path');
const Excel = require('exceljs');

async function xlToJson(fileName){
    const filePath = path.join('lib',fileName);
    const data = await fs.readFile(filePath, 'utf8', (err)=>{(err)?console.log(err):pass});
    const jsonData = JSON.parse(data)
    console.log(jsonData)
    const workbook = new Excel.Workbook();
    const workSheet = workbook.addWorksheet('sheet 1');
    workSheet.columns = [
        { header: 'Name', key: 'name', width: 20},
        { header: 'Age', key: 'age', width: 10},
        { header: 'Gender', key: 'gender', width: 10},
        { header: 'City', key: 'city', width: 20}
    ]

    jsonData.forEach(user => {
        workSheet.addRow(user);
    });

    workbook.xlsx.writeFile(path.join('lib','marks.xlsx'))
    .then(()=>{console.log("\nExcel file written successsfuly at lib/marks.xlsx\n")})
    .catch(error =>{console.error("Error: "+error)});
}

xlToJson("marks.json");