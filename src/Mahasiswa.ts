export namespace Mydata {
export  class Mahasiswa {
    private _nama: string;
    public get nama(): string {
      return this._nama;
    }
    public set nama(value: string) {
      this._nama = value;
    }
    constructor(nama:string) {
      this._nama= nama
    }
  }
}
