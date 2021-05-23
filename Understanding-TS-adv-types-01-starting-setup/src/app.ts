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
names.push('Manu');
console.log(names);
