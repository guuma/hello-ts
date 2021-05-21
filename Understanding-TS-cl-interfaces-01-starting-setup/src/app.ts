interface Named {
  readonly name?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

class Person implements Greetable {
  name?: string;
  age?: number;

  constructor(name?: string, age?: number) {
    if (name) {
      this.name = name;
    }
    this.age = age;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase}、 私は${this.name}!! ${this.age}才です.`);
      return
    }
    console.log('Hi!!');
  }
}

let user1: Greetable;

user1 = new Person('Max');
user1.greet('Hello');

// user1 = {
//   name: 'Max',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

// user1.greet('Hello I am')
