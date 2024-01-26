// /*
//  * type and anotation
//  */
// let animal: string = "lion";
// function tambah(a: number, b: number): number {
//   return a + b;
// }
// console.log(tambah(1, 2));
// let mobil: { merk: string; tahun: number } = {
//   merk: "honda",
//   tahun: 2020,
// };
// console.log(mobil.merk);
// function contoh() {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor,
//   ) {
//     console.log("contoh di jalankan");
//   };
// }
//
// class Example {
//   @contoh()
//   method() {}
// }
//
// new Example().method();

/**
 *
 * variabel
 */

let x = 10;
let y = "hello";
console.log(x, y);

let z: number = 130;
let w: string = "kocak";
console.log(z, w);

function testingNumber(a: number, b: number): number {
  return a + b;
}
console.log(testingNumber(10, 20));
