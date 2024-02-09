"use strict";
/**
 * union
 * penggabungan beberapa tipe data , menggunakan |
 */
let code;
code = 123;
code = "hello";
// code = true ini akan error karena tipe data number dan string tidak sama
function printCode(code) {
    console.log(`code : ${code}`);
    if (typeof code == "string") {
        console.log(`string code : ${code}`);
    }
    else {
        console.log(`number code : ${code}`);
    }
}
printCode(123);
printCode("hello");
