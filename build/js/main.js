"use strict";
/**
 * access modifier
 * 1.private methodd -> hanya bisa diakses class itu sendiri
 * 2.public ->  bisa diakses di class lain
 * 3.protected -> hanya bisa diakses di class itu sendiri dan turunannya
 */
class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
let account = new Account(1, "robot", 1000);
console.log(account.balance);
class Binatang {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        console.log(`name ${this.name} age ${this.age}`);
    }
}
let binatang = new Binatang("sapi", 10);
binatang.name = "lion";
binatang.showInfo();
class Manusia {
    constructor(nama) {
        this.nama = nama;
    }
    setNama(nama) {
        this.nama = nama;
    }
}
let mhs = new Manusia("budi");
console.log(mhs.nama);
mhs.setNama("imbasri");
console.log(mhs.nama);
