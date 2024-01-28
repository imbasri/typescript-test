/**
 * membuat function
 *
 */

function displayName(){
    console.log("Belajar TypeScript");
}

displayName() //call function


function penjumlahan (x:number,y:number):number{
    return x+y
}
console.log(penjumlahan(20, 2))

let greeting = (name:string):void =>{
    console.log( "Hello " + name)
}
greeting("John")

function greet(greeting:string,name:string){
    console.log(`${greeting} ${name}`)
}

greet('Hello', "maman")

// tanda tanya ini adalah opsional ?
function greet2(greeting:string,name?:string){
    console.log(`${greeting} ${name}`)
}

greet2('hello' )

function getDay(year:number = new Date().getFullYear(),month:number = new Date().getMonth()):number {
    return new Date(year, month, 0).getDate();
}
console.log(getDay())
