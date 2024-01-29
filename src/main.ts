/**
 * membuat namespace
 * dan mengambil data dengan reference path
 */
// / <reference path="Mahasiswa.ts" />
import { Mydata} from "./Mahasiswa";
import {Mydata2} from "./Mahasiswa2";

let mhs1 = new Mydata.Mahasiswa("robot");
let mhs2 = new Mydata2.Mahasiswa("fate");

console.log(mhs1)
console.log(mhs2)
// cara menjalankan reference menggunakan terminal tsc --outfile "dirOut" "dirIn"
