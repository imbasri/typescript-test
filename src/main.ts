/**
 * membuat interface
 */

interface IEmployee {
  empCode: number;
  empName: string;
  getSalary: (param: number) => number;
}

class Employee implements IEmployee {
  empCode: number;
  empName: string;
  constructor(empCode: number, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
  }
  getSalary(param: number): number {
    if (param === this.empCode) {
      return 1000;
    }
    return 0;
  }
}

let emp = new Employee(1, "John");
console.log(emp.getSalary(1));

interface Person {
  name: string;
  age: number;
}
let person:Person={ name:"imbasri",age:20 }
console.log(person)

interface Greeting{
  (name:string):string
}
let hello :Greeting = (name:string) => `hello ${name}`
console.log(hello("imbasri"))

interface NumberArray {
  [index:number]:number
}

let array1:NumberArray = [1,2,3]
console.log(array1)

interface SquareConfig{
  color?:string
  width?:number
}
function createSquare(config:SquareConfig):{color:string;area:number}{
  let newSquare = {color:"white",area:100}
  if(config.color){
    newSquare.color = config.color
  }
  if(config.width){
    newSquare.area = config.width*config.width
  }
  return newSquare
}
let mySquare = createSquare({color:"black"})
console.log(mySquare)

/**
 * readonly
 */

interface Point{
  readonly x:number
  readonly y:number
}

let point1 :Point = {x:10,y:20}
console.log({x:point1.x,y:point1.y})

/**
 * extend
 */

interface Shape{
  area():number
}
interface Colorful{
  color:string
}

interface Circle extends Shape,Colorful{
  radius:number
}
class Coba implements Circle{
  color:string
  radius:number
  constructor(color:string,radius:number){
    this.color = color
    this.radius = radius
  }
  area(): number {
    return Math.PI * this.radius * this.radius
  }
}
let test = new Coba("red",10)
console.log(test.area())
