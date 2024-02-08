/**
 * Readonly 
 * property can be readonly
 */

class Cirlce{
  readonly radius:number
  constructor(radius:number){
    this.radius = radius
  }
  getArea(){
    return Math.PI * this.radius * this.radius
  }
}

let circle = new Cirlce(10)
// circle.radius = 5
console.log(circle.getArea())
console.log(circle.radius)


//readonly in interface

interface Person {
  readonly name:string
  readonly hobby:ReadonlyArray<string>
}

let person:Person = {
  name: 'Tom',
  hobby: ['Cooking', 'Singing']
}
console.log(person.name)
console.log(person.hobby)

// person.hobby.push('Reading')

//readonly in type
interface IEmployee {
  empCode : string
  empName:string
}

let emp1 : Readonly<IEmployee> = {
empCode:'123',
empName:'Tom'
}
console.log(emp1)
// emp1.empCode = '321'


//readonly generic

type ReadonlyPoint<T> = {
readonly [K in keyof T]:T[K]
}
type Point ={
  x:number
  y:number
}
type ReadonlyPoint2D = Readonly<Point> 
let point:ReadonlyPoint2D = {
x:10,
y:20,
}
console.log(point)
