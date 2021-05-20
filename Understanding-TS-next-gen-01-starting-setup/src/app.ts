// Code goes here!
// const add = (a: number, b: number = 1) => {
//   let result;
//   result = a + b;
//   return result;
// };

// console.log(add(2));

// const printOutput: (output: string | number) => void = (output) => {
//   console.log(output);
// };

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', (event) => {
    console.log(event);
  });
}

const hobbies = ['Sportts', 'Cooking'];
const obj1 = { name: 'hoge', age: 1 };
const obj2 = { name: 'mac', age: 2 };
const newObj = { ...obj1, ...obj2 };
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);

console.log(activeHobbies);
console.log(newObj);

const add = (...numbers: number[]) => {
  numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add(5, 1, 2, 3.7);
console.log(addNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1);

const person = {
  firstName: 'Max',
  age: 30,
  description: 'Hello World!!',
};

const { firstName, age, ...remainingPram } = person;

console.log(firstName, age, remainingPram);

function test(a: number, b: number) {
  var result = a + b;
  return result;
}

if(age >= 20) {
  var isAdult = true;
}
console.log(isAdult)