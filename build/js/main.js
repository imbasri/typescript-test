"use strict";
/**
 * Static
 * menjalankan sebuah perintah tanpa membuat objek nya dahulu
 */
class MathUtil {
    static getCalculatedArea(radius) {
        return MathUtil.PI * radius * radius;
    }
}
MathUtil.PI = 3.14;
console.log(MathUtil.PI);
console.log(MathUtil.getCalculatedArea(5));
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        Employee.headCount++;
    }
    /**
     * getHeadCount
     */
    static getHeadCount() {
        return Employee.headCount;
    }
}
Employee.headCount = 0;
let jon = new Employee("Jon", "Doe");
let anna = new Employee("anna", "Smith");
console.log('nilai', Employee.getHeadCount());
console.log('nilai', Employee.headCount);
