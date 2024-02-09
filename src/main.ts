/**
 * array and tuple 
 */

//cara mendeklarisakan array
//1.menggunakan type[] tanda kurung

let fruits= ["apple", "mango", "banana"];
console.log(fruits)

let fruits2:Array<string> = ["apple", "mango", "banana"];
console.log(fruits2)

let fruits3:Array<string>;
fruits3=["apple", "mango", "banana"];
console.log(fruits3)

let numbering :Array<number>
numbering = [1,2,3,4,5];
console.log(numbering)

let values:Array<number|string> = [1,"hello"];
console.log(values)

let testing:(string|number)[];
testing=["hello",1];
console.log(testing)

let fruits4 = ["grape", "mango", "banana"];
console.log(fruits4[1])

//tuple -> membuat array yang berisi tipe data
let employee:[string,number,boolean] = ['imbasri',2, true]
console.log(employee)

let user : [number,string,boolean,string]
user=[1,'imbasri',true,'programmer']
console.log(user)

let numbers : [first:string,second:number,...rest:number[]]
numbers = ['hello',1,2,3,4]
numbers[3]=500
numbers.push(20,"testing")
console.log(numbers)
