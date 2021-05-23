// const names: Array<string> = [];
// names[0].split(' ');

// const promise: Promise<any> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Success');
//   }, 2000)
// })

// promise.then(data => {
//   console.log(data)
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 18 });

console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'No value available';
  if (element.length > 0) {
    descriptionText = '値は' + element.length + '個です';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Good Work!!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'nick' }, 'name');

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const ary = [1, 2, 3];
console.log(ary.indexOf(2));

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Data1');
// textStorage.addItem('Data2');
// // textStorage.removeItem('Data1');

// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();
// numberStorage.addItem(1);
// numberStorage.addItem(2);
// console.log(numberStorage.getItems());

const objStorage = new DataStorage<string>();
// const obj = { name: 'Max' };
// Argument of type '{ name: string; }' is not assignable to parameter of type 'string'
// objStorage.addItem({ name: 'Max' });
objStorage.addItem('Max');

objStorage.removeItem('Max');
console.log(objStorage.getItems());

const objArray = [{ name: 'Max' }, { name: 'Manu' }];

const objMax = { name: 'Max' };

console.log(objArray.indexOf(objMax));

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
console.log(names);

function greeter(fn: (text: string) => void) {
  fn('Hello, World');
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

// define functional type
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(`${fn.description} returned ${fn(6)}`);
}

// define constructor type
// type SomeConstructor = {
//   new (s: string): SomeObject;
// };

// function fn(ctor: SomeConstructor) {
//   return new ctor('hello');
// }

// Generic Functions
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

console.log(map(['1', '2', '3'], (n) => parseInt(n)));

// Generic Functions with Constraints
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);

// longerStirng is of type 'string'
const longerString = longest('alice', 'bob');

// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);

// Generic Type inference
function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

const array1 = ['Mac', 'Nick'];
const array2 = [1];

console.log(combine<string | number>(array1, array2));
