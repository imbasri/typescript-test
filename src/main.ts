import { Account } from "./entity/Account";
import { Animal } from "./entity/Animal";
import { Shape } from "./entity/Shape";
//membuat object
let animal = new Animal("Lion", 5);
animal.showInfo();

//inhitance class (pewarisan)

class Cat extends Animal {
  call: string;
  constructor(name: string, age: number, call: string) {
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

let account = new Account(12, "John Doe", 1000);
account.deposit(500);
console.log(account);

class Circle extends Shape {
  private radius: number;
  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
  showInfo(): void {
    super.showInfo();
    console.log(`Radius: ${this.getArea()}`);
  }
}

class Rectangle extends Shape {
  private length: number;
  private width: number;
  constructor(color: string, length: number, width: number) {
    super(color);
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  showInfo(): void {
    super.showInfo();
    console.log(`Length: ${this.length}, Width: ${this.width}`);
  }
}

let shape1: Shape = new Circle("red", 5);
let shape2: Shape = new Rectangle("blue", 10, 5);
console.log(shape1.getArea());
console.log(shape2.getArea());
shape1.showInfo();
shape2.showInfo();
