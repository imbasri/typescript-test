"use strict";
/**
 * membuat function
 *
 */
function displayName() {
    console.log("Belajar TypeScript");
}
displayName(); //call function
function penjumlahan(x, y) {
    return x + y;
}
console.log(penjumlahan(20, 2));
let greeting = (name) => {
    console.log("Hello " + name);
};
greeting("John");
function greet(greeting, name) {
    console.log(`${greeting} ${name}`);
}
greet('Hello', "maman");
// tanda tanya ini adalah opsional ?
function greet2(greeting, name) {
    console.log(`${greeting} ${name}`);
}
greet2('hello');
function getDay(year = new Date().getFullYear(), month = new Date().getMonth()) {
    return new Date(year, month, 0).getDate();
}
console.log(getDay());
