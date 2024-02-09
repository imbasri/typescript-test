/**
 *  Looping 
 */

let sum:number = 0
for (let i:number = 1; i < 10; i++) {
  sum += i
}
console.log(sum)
let fruits :string[] =[ "apple", "banana", "orange", "mango"]

for (const fruit of fruits) {
  console.log(fruit)
}

let person:any = {
  name: "John",
  age: 30,
  gender:"male",
}

for (const key in person) {
  console.log(key, person[key])
}

let i:number = 1
while(i < 5) {
  console.log(i)
  i++
}

i=1
do{
console.log(i)
i++
}while(i<=5)


i=1
while(1<=5){
  console.log(i)
  i++
  if(i==3){
    break
  }
}


let day:string = "Monday"

switch (day) {
  case "Monday":
    console.log(day)
    break;
case "Tuesday":
  console.log('tuesday')
  break
  default:
    console.log('invalid day')
    break;
}
