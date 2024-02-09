/**
 *  Generik 
 */

function identity <T>(arg:T):T{
    return arg
}
let output = identity<string>("myString")
console.log(output)

let output1 = identity<number>(123)
console.log(output1)

let output2 = identity<boolean>(true)

interface Lengthwise{
    length:number
}
function loggingIdentity<T extends Lengthwise>(arg:T):T{
  console.log(arg.length)
return arg
}
loggingIdentity({
  length:10,value:3
})

interface IProcessor<T>{
  result:T
  process(a:T,b:T):T

}
class NumberProcessor implements IProcessor<number>{
  result: number=0
  process(a: number, b: number): number {
    this.result=a+b
    return this.result
  }
}

let  np = new NumberProcessor()
let hasil = np.process(10, 20)
console.log(hasil)


class Stack <T> {
  private items:T[] = []
  push(element:T){
    this.items.push(element)
  }
  pop(){
    return this.items.pop()
  }
}

let stack = new Stack<number>()
stack.push(10)
stack.push(20)

console.log(stack.pop())
console.log(stack.pop())


