"use strict";
console.log("Hello world");
// type data any yaitu bebas atau me-ignore type data
let data = {
    name: "Nik",
    age: 20,
};
console.log(data.name);
let w = 1;
w = "string";
w = {
    runNonExixtsMethod: () => {
        console.log("runNonExixtsMethod");
    },
};
//type data never menjalankan / return error
function throwError(message) {
    throw new Error(message);
}
// throwError("error nich");
function assertNever(x) {
    throw new Error("error" + x);
}
function printAnimal(animal) {
    switch (animal) {
        case "cat":
            console.log("cat");
            break;
        case "dog":
            console.log("dog");
            break;
        case "bird":
            console.log("bird");
            break;
        default:
            assertNever(animal);
    }
}
printAnimal("cat");
// printAnimal("cat2");
