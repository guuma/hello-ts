// const person = {
//   name: 'yota',
//   age: 30,
//   hobbies: []
// };

// console.log(person);

// function greeter(func: (a: string) => void) {
//   func('Hello World!!')
// }

// function printToConsole(s: string) {
//   console.log(s)
// }

// greeter(printToConsole)

// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean;
// };

// function doSomething(fn: DescribableFunction) {
//   console.log(`${fn.description} returned ${fn(6)}`);
// }

// function firstElement<Type>(arr: Type[]): Type {
//   return arr[0];
// }

// function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
//   return arr.map(func);
// }

// const arr = ['1', '2', '3'];
// const parsed = arr.map((n) => parseInt(n));

// console.log(parsed);

// const array = [1, 2, 3];

// array.map((i) => {
//   console.log(i);
// });

// function firstElemnt<Type>(arr: Type[]): Type {
//   return arr[0];
// }

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'yota',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'yota',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

if(person.role === Role.ADMIN) {
  console.log('You are Admin user')
}

// person.role.push('admin');
