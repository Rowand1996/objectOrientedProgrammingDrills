// let person1 = {
//     familyMemberName: 'David Douglas',
//     sayHello: function(){
//         console.log(`Hello My Name is ${this.familyMemberName}`);
//     }
// };
// person1.sayHello();

// let person2 = {
//     familyMemberName: 'Grant Von-Lintel',
//     sayHello: function(){
//         console.log(`Hello My Name is ${this.familyMemberName}`);
//     }
// };
// person2.sayHello();

// let person3 = {
//     familyMemberName: 'Vera Douglas',
//     sayHello: function(){
//         console.log(`Hello My Name is ${this.familyMemberName}`);
//     }
// };
// person3.sayHello();

// let person4 = {
//     familyMemberName: 'Mindy Douglas',
//     sayHello: function(){
//         console.log(`Hello My Name is ${this.familyMemberName}`);
//     }
// };
// person4.sayHello();

// let person5 = {
//     familyMemberName: 'Emma Douglas',
//     sayHello: function(){
//         console.log(`Hello My Name is ${this.familyMemberName}`);
//     }
// };
// person5.sayHello();

class Person {
    constructor(name, age, city) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    sayHello() {
        console.log(`Hey! My name is ${this.name} i am ${this.age} years old and live in ${this.city}.`);
    }
}
const person = new Person("Vera Douglas", "21", "Birmingham");
const person2 = new Person("David Douglas", "50", "Birmingham");
const person3 = new Person("Mindy Douglas", "IDK", "Birmingham");
const person4 = new Person("Emma Douglas", "11", "Birmingham");
const person5 = new Person("Grant Von-Lintel", "22", "Birmingham");
person.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();


class Vehicle {
    constructor(type, manufacturer, numberOfWheels) {
        this.manufacturer = manufacturer;
        this.type = type;
        this.numberOfWheels = numberOfWheels;
    }
    aboutVehicle() {
        console.log(`This vehicles type is ${this.type} it was made by ${this.manufacturer} and has ${this.numberOfWheels} Wheels.`);
    }
}

const vehicle = new Vehicle("Car", "Ford", "4");
vehicle.aboutVehicle();

class Truck extends Vehicle {
    constructor(type, manufacturer, numberOfWheels,numberOfDoors,hasTruckBed) {
        super(type,manufacturer,numberOfWheels);
        this.numberOfDoors = numberOfDoors;
        this.hasTruckBed = hasTruckBed;
    }
    
    aboutVehicle() {
        if(this.hasTruckBed == true){
            this.hasTruckBed = "it does has a truckbed";
        }
        else{
            this.hasTruckBed = "it does not have a truckbed";
        }
        console.log(`This vehicles type is ${this.type} it was made by ${this.manufacturer} it has ${this.numberOfWheels} wheels it has ${this.numberOfDoors} doors and ${this.hasTruckBed}.`);
    }
}

const truck = new Truck("Truck","Ford","4","4",true);
truck.aboutVehicle();

class Sedan extends Vehicle {
    constructor(type, manufacturer, numberOfWheels, numberOfDoors, size, mpg) {
        super(type, manufacturer, numberOfWheels);
        this.numberOfDoors = numberOfDoors;
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle(){
        console.log(`This vehicles type is ${this.type} it was made by ${this.manufacturer} it has ${this.numberOfWheels} wheels it has ${this.numberOfDoors} doors its a ${this.size} car and its MPG is ${this.mpg}.`);
    }
}

const sedan = new Sedan("Sedan","Nissan","4","4","small","29 city / 37 highway");
sedan.aboutVehicle();

class Motorcycle extends Vehicle {
    constructor(type,manufacturer,numberOfWheels,hasHandleBars,hasDoors){
        super(type,manufacturer,numberOfWheels);
        this.hasHandleBars = hasHandleBars;
        this.hasDoors = hasDoors;
    }

    aboutVehicle(){
        if(this.hasHandleBars == true){
            this.hasHandleBars = "has handlebars";
        }
        else{
            this.hasHandleBars = "doesn't have handlebars";
        }
        if(this.hasDoors == false){
            this.hasDoors = "doesn't have doors";
        }
        else{
            this.hasDoors = "has doors";
        }
        console.log(`This vehicles type is ${this.type} it was made by ${this.manufacturer} it has ${this.numberOfWheels} wheels it ${this.hasHandleBars} and it ${this.hasDoors}.`);
    }
}

const motorcycle = new Motorcycle("Motorcycle","Ducati","2",true,false);
motorcycle.aboutVehicle();


