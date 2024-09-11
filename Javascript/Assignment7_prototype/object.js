class Vehicle{
    constructor(wheels, seats, manufacturer, model){
        this.wheels = wheels;
        this.seats = seats;
        this.manufacturer = manufacturer;
        this.model = model;
    }
}

class Car extends Vehicle{
    constructor(seats, manufacturer, model){
        super(4, seats, manufacturer, model);
        this.type = "Car";
        
    }
}

class Bike extends Vehicle{
    constructor(manufacturer, model){
        super(2, 2, manufacturer, model);
        this.type = "Bike";
    }
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

class Company{
    constructor(name){
        this.name = name;
        this.vehicles = [];
    }
}

Company.prototype.addCar = function(seats,model){
    let new_car = new Car(seats,this.name,model);
    this.vehicles.push(new_car);
}

Company.prototype.addBike = function(model){
    let new_bike = new Bike(this.name,model);
    this.vehicles.push(new_bike);
}

Company.prototype.displayVehicles = function(){
    console.log("List of Vehicles")
    for(let veh of this.vehicles){
        console.log(`${veh.manufacturer} ${veh.model} ${veh.type}: ${veh.wheels} Wheeler ${veh.seats} Seater`);
    }
}


let audi = new Company("Audi");
audi.addCar(6,"RS7");
audi.addCar(8,"RS8");
audi.displayVehicles();
