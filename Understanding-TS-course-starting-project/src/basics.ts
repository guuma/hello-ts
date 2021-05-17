console.log('ここにコードを追加します。');

function addCalc(n1: number, n2: number, printResult: boolean, pharase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('入力値が正しくありません');
  // }
  const result = n1 + n2;
  if (printResult) {
    console.log(pharase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 'string';
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result: ';

const result = addCalc(number1, number2, printResult, resultPhrase);
console.log(result);
