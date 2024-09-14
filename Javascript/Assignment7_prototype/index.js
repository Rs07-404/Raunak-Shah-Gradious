
//=======================================BASE CLASS=======================================
// Define Base Class Company
function Company(name, location){
    this.name = name; // Defining property name.
    this.location = location; // Defining property location.
    this.employees = []; // Defining property Employess.
    console.log(`${name} Company Created`);
}

// Define the employee class required to create new employee object when hireEmployee method is called.
function Employee(name, position){
    this.name = name; // Defining property name.
    this.position = position; // Defining property position.
}

// Defining the hireEmployee method on the Company's prototype
Company.prototype.hireEmployee = function(name, position){
    let new_employee = new Employee(name, position); // Creating new employee using Employee class
    this.employees.push(new_employee); // Pushing new employee to the emplyees array defined in the Company class
    console.log(`Hired ${name} as ${position} at ${this.name} company in ${this.location}`); // Log the hired employee
}

// Defining the displayDetails method on the Company's prototype
Company.prototype.displayDetails = function(){
    console.log(`\n${this.name} Company Details`);
    console.log(`Company Name: ${this.name}`);  // Log the company name
    console.log(`Company location: ${this.location}`); // Log the company location
    console.log(`Company Type: ${this.type}`); // Log the company type
    // Log the list of Employees
    console.log("Employess: ")
    for(let employee in this.employees){
        console.log(`${parseInt(employee)+1}.Name: ${this.employees[employee].name}, Position: ${this.employees[employee].position}`);
    }
    console.log('');
}




//=======================================SUB CLASS=======================================

// Define the subclass SoftwareCompany.
function SoftwareCompany(name, location){
    Company.call(this,name,location);
    this.type = "Software"
}

// Set up inheritence from Company class for SoftwareCompany.
//Creating new object with Company's Prototype as its prototype 
SoftwareCompany.prototype = Object.create(Company.prototype); //Inherits all the methods and properties
//Setup Constructor for SoftwareCompany class
SoftwareCompany.prototype.constructor = SoftwareCompany; // Correct constructor reference to SoftwareCompany class and not Company class



// Define the subclass ManufacturingCompany.
function ManufacturingCompany(name, location){
    Company.call(this,name,location);
    this.type = "Manufacturing"
}

// Set up inheritence from Company for ManufacturingCompany
//Creating new object with Company's Prototype as its prototype 
ManufacturingCompany.prototype = Object.create(Company.prototype); //Inherits all the methods and properties
//Setup Constructor for ManufacturingCompany class
ManufacturingCompany.prototype.constructor = ManufacturingCompany; // Correct constructor referenve to ManufacturingCompany and not Company class




//=======================================CREATING OBJECTS=======================================

// Creating object for SoftwareCompany
const github = new SoftwareCompany("Github", "San Francisco");
// Calling hireEmployee method inherited from class Company.
github.hireEmployee("Bob", "Designer");
github.hireEmployee("Alice", "Developer");
// Calling displayDetails method inherited from class Company.
github.displayDetails();


// Creating object for ManufacturingCompany
const apple = new ManufacturingCompany("Apple", "California");
// Calling hireEmployee method inherited from class Company.
apple.hireEmployee("Charlie", "Engineer");
apple.hireEmployee("Dave", "Technician");
// Calling displayDetails method inherited from class Company.
apple.displayDetails();