// Code goes
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// Operator '+' cannot be applied to types 'number' and 'Combinable' が出るため一旦コメントアウト
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === 'string' || b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

type UnknownEmployee = Employee | Admin;

function printEmployeeInfomation(emp: UnknownEmployee) {
  console.log('privileges' in emp);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
    return;
  }
  console.log('Not find Privileges property');
}

const e2: ElevatedEmployee = {
  name: 'nick',
  privileges: ['create-server'],
  startDate: new Date(),
};

printEmployeeInfomation(e2);

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log("I'm driving a truck");
  }

  loadCargo(amount: number) {
    console.log(`We're loading up... ${amount}Kg`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log(`Moving Speed ${speed}`);
}

const birdObj = {
  type: 'bird',
  flyingSpeed: 5,
};

const paragraph = document.getElementById('message-output');
console.log(paragraph, typeof paragraph);

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');

function setInputValue(userInputElement: HTMLInputElement) {
  if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hello World';
  } else {
    console.log('Can not find  userInputElement');
  }
}

setInputValue(userInputElement);
