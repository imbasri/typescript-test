"use strict";
/**
 * Readonly
 * property can be readonly
 */
class Cirlce {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
let circle = new Cirlce(10);
// circle.radius = 5
console.log(circle.getArea());
console.log(circle.radius);
let person = {
    name: 'Tom',
    hobby: ['Cooking', 'Singing']
};
console.log(person.name);
console.log(person.hobby);
let emp1 = {
    empCode: '123',
    empName: 'Tom'
};
console.log(emp1);
let point = {
    x: 10,
    y: 20,
};
console.log(point);
