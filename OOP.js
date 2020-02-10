//Part 1 - Object Literals, Pseudo Classes and Methods

//step 1 - 5 object literals
let person1 = {
    name: 'Jamie',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};

let person2 = {
    name: 'Tayler',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};

let person3 = {
    name: 'Emily',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};

let person4 = {
    name: 'Sabrina',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};

let person5 = {
    name: 'Ross',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

//steps 2-4 - contructor function, pseudo classes(capital letter!) because JS doesn't support OOP
//OR? class Person(name, city, age) {
function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
};

Person.prototype.sayHi = function () {
    console.log(`Hey! My name is ${this.name} and I am ${this.age} years old and live in ${this.city}.`)
};

let p1 = new Person('Jamie', 'Cullman', 48)
let p2 = new Person('Tayler', 'Gulf Shores', 28)
let p3 = new Person('Emily', 'Cullman', 33)
let p4 = new Person('Sabrina', 'Vinemont', 53)
let p5 = new Person('Ross', 'Birmingham', 28)

p1.sayHi();
p2.sayHi();
p3.sayHi();
p4.sayHi();
p5.sayHi();

//step 6 - ES6 syntax for OOP (no constructor func; use keyword: class instead)

// let about = (name, city, age) => console.log

class People {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }

    greet() {
        console.log((`Hey! My name is ${this.name} and I am ${this.age} years old and live in ${this.city}.`))
    }
};

let ppl1 = new People('Jamie', 'Cullman', 48)
let ppl2 = new People('Tayler', 'Gulf Shores', 28)
let ppl3 = new People('Emily', 'Cullman', 33)
let ppl4 = new People('Sabrina', 'Vinemont', 53)
let ppl5 = new People('Ross', 'Birmingham', 28)

ppl1.greet();
ppl2.greet();
ppl3.greet();
ppl4.greet();
ppl5.greet();


//Part 2- Inheritance

//step 1 - class = vehicle manufacturer & # of wheels

class Vehicle {
    constructor(type, manufacturer, wheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }
    aboutVehicle() {
        console.log(`This vehicle is made by ${this.manufacturer} and has ${this.wheels} wheels.`)
    }
};

class Sedan extends Vehicle {
    constructor(type, manufacturer, wheels, doors, size, mpg) {
        super(type, manufacturer, wheels);
        this.doors = doors;
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This vehicle is a ${this.size} sized ${this.type} and made by ${this.manufacturer}. It has ${this.wheels} wheels, ${this.doors} doors, and gets ${this.mpg} mpg.`)
    }
}

class Motorcycle extends Vehicle {
    constructor(type, manufacturer, wheels, steering, doors,) {
        super(type, manufacturer, wheels);
        this.steering = steering;
        this.doors = doors;
    }
    aboutVehicle() {
        console.log(`This vehicle is a ${this.type} made by ${this.manufacturer} and has ${this.wheels} wheels and steers with ${this.steering}.`)
    }
}

v1 = new Sedan('Camry', 'Toyota', 4, 4, 'medium', 35)
v1.aboutVehicle();

v2 = new Motorcycle('Roadster', 'Harley Davidson', 2, 'handlebars', 0)
v2.aboutVehicle();

// let v1 = ('Honda', 'sedan', 4, 4, 'medium', 30)
// let v2 = ('Harley', 'motorcycle', 2, null, null, 35)