"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * membuat namespace
 * dan mengambil data dengan reference path
 */
// / <reference path="Mahasiswa.ts" />
const Mahasiswa_1 = require("./Mahasiswa");
const Mahasiswa2_1 = require("./Mahasiswa2");
let mhs1 = new Mahasiswa_1.Mydata.Mahasiswa("robot");
let mhs2 = new Mahasiswa2_1.Mydata2.Mahasiswa("fate");
console.log(mhs1);
console.log(mhs2);
// cara menjalankan reference menggunakan terminal tsc --outfile "dirOut" "dirIn"
