"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mydata = void 0;
var Mydata;
(function (Mydata) {
    class Mahasiswa {
        get nama() {
            return this._nama;
        }
        set nama(value) {
            this._nama = value;
        }
        constructor(nama) {
            this._nama = nama;
        }
    }
    Mydata.Mahasiswa = Mahasiswa;
})(Mydata || (exports.Mydata = Mydata = {}));
