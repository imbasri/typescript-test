/**
 * access modifier
 * 1.private methodd -> hanya bisa diakses class itu sendiri
 * 2.public ->  bisa diakses di class lain
 * 3.protected -> hanya bisa diakses di class itu sendiri dan turunannya
 */

class Account{
  private _id: number;
  private _name: string;
  private _balance: number;

constructor(id: number, name: string, balance: number){
  this._id = id;
  this._name = name;
  this._balance = balance;
}

  public get balance(): number {
    return this._balance;
  }
  public set balance(value: number) {
    this._balance = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  
}

let account = new Account(1, "robot", 1000);
console.log(account.balance);

class Binatang {
  public name: string;
  public age:number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;    

  }
  showInfo(){
    console.log(`name ${this.name} age ${this.age}`);
  }
}
let binatang = new Binatang("sapi", 10);
binatang.name = "lion";
binatang.showInfo();


class Manusia {
  nama: string;
  constructor(nama: string) {
    this.nama = nama
  }

  setNama(nama:string){
    this.nama = nama
  }
}

let mhs = new Manusia("budi")
console.log(mhs.nama)
mhs.setNama("imbasri")
console.log(mhs.nama)
