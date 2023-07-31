/* eslint-disable @typescript-eslint/no-unused-vars */
const myPromise = new Promise((res, rej) => {
  const number: number = Math.random();
  return number >= 0.5 ? res(number) : rej(number);
})
  .then((result) => console.log(`Success: ${result}`))
  .catch((err) => console.warn(`Failure: ${err}`));
console.log('end');
enum Color {
  Red,
  Green,
  Blue,
}

const selectedColor: Color = Color.Green;
console.log(selectedColor);
interface Animal {
  name: string;
}
interface Bear extends Animal {
  honey: boolean;
}
const bear: Bear = { name: 'bear', honey: true };
console.log(bear);
function hello<T>(arg: T): T {
  return arg;
}
const genericExpression = <T,>(arg: T): T[] => {
  return [arg];
};
console.log(hello([{ name: 'sandro' }]));
console.log(genericExpression({ name: 'sandro' }));
//typescript generics
//Task 1:
//Create a generic function called reverseArray that takes an array of any type and returns
// the array with its elements reversed. The input array should remain unchanged.
const reverseArray = <T,>(arg: T[]): T[] => [...arg].reverse();
console.log(reverseArray(['a', 'b', 'c']));
console.log(reverseArray([1, 2, 3]));
//

//TASK 2:
/*Task 2:
Write a generic class called Stack that implements a stack data structure. 
The class should have methods push, pop, and peek. The push method should add an element to 
the stack, the pop method should remove and return the top element from the stack, and the peek 
method should return the top element without removing it. */
class Stack<T> {
  constructor(public array: T[]) {
    this.array = array;
  }
  pushItem(item: T) {
    this.array.push(item);
    return this;
  }
  popItem() {
    this.array.splice(this.array.length - 1);
    console.log(this.array);
    return this;
  }
  peekItem() {
    return this.array[this.array.length - 1];
  }
}
const task2 = new Stack([]);
task2.pushItem('hello!').pushItem('world!').pushItem(123).popItem();
console.log(task2.peekItem());
//
/*
Task 3:
Implement a generic function called filterArray that takes an array of any type and a callback 
function. The callback function should take an element of the array as an argument and return a
 boolean. The filterArray function should return a new array containing only the elements for 
 which the callback function returns true.
*/
type T = unknown;
const checkCondition = <T,>(item: T): boolean => item % 2 !== 0;
const task3Arr: Array<T> = ['1', 2, '3', 4, 5, 6, 7, 8, 9, 10];
const filterArray = <T,>(arr: T[], callback: (item: T) => boolean): T[] => {
  const result: Array<T> = [];
  arr.forEach((item) => {
    if (callback(item)) {
      result.push(item);
    }
  });
  return result;
};

console.log(filterArray(task3Arr, checkCondition));
//
/*
Task 4:
Create a generic interface called KeyValuePair that represents a key-value pair.
 The interface should have two properties: key of type K and value of type V.

*/
// type K = string;
// type V = string;
// interface KeyValuePair<K, V> {
//   key: K;
//   value: V;
// }
//
// type U = string | number | (() => void);
// interface TYPE<T = string | number | (() => void)> {
//   name: T;
//   [key: string]: T;
// }
// const obj: TYPE = { name: 'God Of Code' };
// obj.greet = function () {
//   //   console.log(`Hello, ${this.name}!`);
//   return `Hello, ${this.name}!`;
// };
// obj.age = 36;
// console.log(obj);
// // obj.greet();
// console.log(obj.hasOwnProperty('greet'));
// obj.getData = function () {
//   console.log(`${this.age}`, `${this.greet()}`);
// };
// obj.getData();
const Tasks = () => {
  return <div>Tasks</div>;
};
export default Tasks;
