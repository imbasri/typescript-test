"use strict";
/**
 *  Looping
 */
let sum = 0;
for (let i = 1; i < 10; i++) {
    sum += i;
}
console.log(sum);
let fruits = ["apple", "banana", "orange", "mango"];
for (const fruit of fruits) {
    console.log(fruit);
}
let person = {
    name: "John",
    age: 30,
    gender: "male",
};
for (const key in person) {
    console.log(key, person[key]);
}
let i = 1;
while (i < 5) {
    console.log(i);
    i++;
}
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
i = 1;
while (1 <= 5) {
    console.log(i);
    i++;
    if (i == 3) {
        break;
    }
}
let day = "Monday";
switch (day) {
    case "Monday":
        console.log(day);
        break;
    case "Tuesday":
        console.log('tuesday');
        break;
    default:
        console.log('invalid day');
        break;
}
