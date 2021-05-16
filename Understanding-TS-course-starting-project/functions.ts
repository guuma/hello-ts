function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

let combineValues: (n1: number, n2: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));

// printResult(add(1, 2));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result)
})