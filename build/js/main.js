"use strict";
/**
 *  Generik
 */
function identity(arg) {
    return arg;
}
let output = identity("myString");
console.log(output);
let output1 = identity(123);
console.log(output1);
let output2 = identity(true);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity({
    length: 10, value: 3
});
class NumberProcessor {
    constructor() {
        this.result = 0;
    }
    process(a, b) {
        this.result = a + b;
        return this.result;
    }
}
let np = new NumberProcessor();
let hasil = np.process(10, 20);
console.log(hasil);
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop());
console.log(stack.pop());
