"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    //membuat constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //method animal
    showInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
exports.Animal = Animal;
