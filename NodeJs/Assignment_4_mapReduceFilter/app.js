import employees from "./lib/employees.js";

// Created js file using following method.
// async function fetchData(){
//     const data = await fs.readFile(path.join('lib',"employees.txt"),'utf8');
//     await fs.writeFile(path.join('lib','employees.js'), data+`export default employees;`, 'utf8');
// }
// fetchData();

function getEmployees(){
    const data = employees.map(employee=>{
        return {"name": employee["name"],
	"age": employee["age"],
	"salary": employee["salary"],
	"department": employee["department"],
	"city": employee["city"],
    "tier": (employee["salary"]> 50000)?1:2}
    })

    console.log(data);
}

function getEmployeesByCity(city){
    const data = employees.filter((employee)=>employee.city === city);
    console.log(data);
}

function getTotalSalary(){
    const salary = (employees.map(employee=>{return employee.salary}))
    console.log(`Total Salary: ${salary.reduce((a,b)=>a+b)}`);
}

function getTotalSalaryOfHyderabad(){
    const salary = employees.filter((employee)=>employee.city === "Hyderabad").map(employee=>{return employee.salary})
    console.log(`Total Salary of employees in Hyderabad: ${salary.reduce((a,b)=>a+b)}`);
}

function getTotalSalaryOfTier1(){
    const data = employees.map(employee=>{
        return {"name": employee["name"],
	"age": employee["age"],
	"salary": employee["salary"],
	"department": employee["department"],
	"city": employee["city"],
    "tier": (employee["salary"]> 50000)?1:2}
    })
    const salary = data.filter((employee)=>employee.tier === 1).map(employee=>{return employee.salary})
    console.log(`Total Salary of tier 1: ${salary.reduce((a,b)=>a+b)}`);

}
getEmployees();
getEmployeesByCity('Hyderabad');
getTotalSalary();
getTotalSalaryOfHyderabad();
getTotalSalaryOfTier1();