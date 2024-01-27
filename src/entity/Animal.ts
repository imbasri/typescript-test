export class Animal {
  //deklarisi property
  name: string;
  age: number;
  //membuat constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  //method animal
  showInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
