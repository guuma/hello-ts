// function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
//   let result;
//   if (
//     (typeof input1 === 'number' && typeof input2 === 'number') ||
//     resultConversion === 'as-number'
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);

// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges);

// const combinedNames = combine('Max', 'Annna', 'as-text');
// console.log(combinedNames);

// let number1: number;
// number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// let resultPhrase = 'Result';

function padLeft(padding: number | string, input: string) {
  if (typeof padding === 'number') {
    return new Array(padding + 1).join(' ') + input;
  }
  return padding + input;
}

console.log(padLeft(3, 'Hello World!!!'));

// function printAll(strs: string | string[] | null) {
//   if (strs && typeof strs === 'object') {
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === 'string') {
//     console.log(strs);
//   }
// }

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}

printAll(['']);
printAll('');

function logValue(x: Date | string) {
  if(x instanceof Date) {
    console.log(x.toUTCString())
  } else {
    console.log(x.toUpperCase())
  }
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// console.log(typeof ['a', 'b'] === 'object');

// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   const result = n1 + n2;
//   if(showResult) {
//     console.log(phrase + result);
//   } else {
//     return result;
//   }
// }
