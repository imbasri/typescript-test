/**
 * Static 
 * menjalankan sebuah perintah tanpa membuat objek nya dahulu
 */
class MathUtil {
  static PI:number = 3.14
  static getCalculatedArea(radius:number):number {
    return MathUtil.PI * radius * radius
  }
}

console.log(MathUtil.PI)
console.log(MathUtil.getCalculatedArea(5));

class Employee {
  static headCount: number = 0;
  constructor(
    private firstName: string,
    private lastName: string,
  ) {
    Employee.headCount++;
  }
  /**
   * getHeadCount
   */
  public static getHeadCount() {
    return Employee.headCount
  }
}
let jon = new Employee("Jon", "Doe");
let anna = new Employee("anna", "Smith");

console.log('nilai',Employee.getHeadCount())
console.log('nilai',Employee.headCount)
