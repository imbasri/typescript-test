export class Shape {
  protected _color: string;
  constructor(color: string) {
    this._color = color;
  }

  getArea() {
    return 0;
  }

  showInfo() {
    console.log(`Color: ${this._color}`);
  }
}
