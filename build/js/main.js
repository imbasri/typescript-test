"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = require("./entity/Account");
const Animal_1 = require("./entity/Animal");
const Shape_1 = require("./entity/Shape");
//membuat object
let animal = new Animal_1.Animal("Lion", 5);
animal.showInfo();
//inhitance class (pewarisan)
class Cat extends Animal_1.Animal {
    constructor(name, age, call) {
        super(name, age);
        this.call = call;
    }
    showInfo() {
        super.showInfo();
        console.log(`My call is ${this.call}`);
    }
}
let cat = new Cat("Waaaww", 10, "meow");
cat.showInfo();
let account = new Account_1.Account(12, "John Doe", 1000);
account.deposit(500);
console.log(account);
class Circle extends Shape_1.Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
    showInfo() {
        super.showInfo();
        console.log(`Radius: ${this.getArea()}`);
    }
}
class Rectangle extends Shape_1.Shape {
    constructor(color, length, width) {
        super(color);
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
    showInfo() {
        super.showInfo();
        console.log(`Length: ${this.length}, Width: ${this.width}`);
    }
}
let shape1 = new Circle("red", 5);
let shape2 = new Rectangle("blue", 10, 5);
console.log(shape1.getArea());
console.log(shape2.getArea());
shape1.showInfo();
shape2.showInfo();
