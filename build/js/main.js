"use strict";
/**
 * membuat interface
 */
class Employee {
    constructor(empCode, empName) {
        this.empCode = empCode;
        this.empName = empName;
    }
    getSalary(param) {
        if (param === this.empCode) {
            return 1000;
        }
        return 0;
    }
}
let emp = new Employee(1, "John");
console.log(emp.getSalary(1));
let person = { name: "imbasri", age: 20 };
console.log(person);
let hello = (name) => `hello ${name}`;
console.log(hello("imbasri"));
let array1 = [1, 2, 3];
console.log(array1);
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
console.log(mySquare);
let point1 = { x: 10, y: 20 };
console.log({ x: point1.x, y: point1.y });
class Coba {
    constructor(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
let test = new Coba("red", 10);
console.log(test.area());
