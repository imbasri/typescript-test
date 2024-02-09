/**
 * union
 * penggabungan beberapa tipe data , menggunakan |
 */

let code: string | number;
code = 123;
code = "hello";
// code = true ini akan error karena tipe data number dan string tidak sama

function printCode(code: string | number) {
  console.log(`code : ${code}`);
  if (typeof code == "string") {
    console.log(`string code : ${code}`);
  } else {
    console.log(`number code : ${code}`);
  }
}

printCode(123);
printCode("hello");
