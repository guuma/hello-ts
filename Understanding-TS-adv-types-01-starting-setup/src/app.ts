function Logger(logString: string) {
  console.log('Logger: decorator factory');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('WithTemplate: decorator factory');
  return function <T extends { new (...args: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('@WithTemplete: Outputting log');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

@Logger('@Logger: Outputting log')
@WithTemplate('<h1>Person Object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Person object is being created...');
  }
}

// const pers = new Person();

// console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property Decorator');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Method Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parametor Decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  // Property Decorator
  @Log
  title: string;
  private _price: number;

  // Accessor Decorator
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Incorrect price. Cannot set price below 0.');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  console.log(descriptor);
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      console.log(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = 'Click!!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const btnEle = document.querySelector('button');

btnEle?.addEventListener('click', p.showMessage);

class Course {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    @Required
    this.title = title;
    @PositiveNumber
    this.price = price;
  }
}

// function formValidation(titleVal: string, priceVal: number) {
//   console.log(titleVal, priceVal);
// }

type ValidatorConfig = {
  [prop: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
};

const registerdValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registerdValidators[target.constructor.name] = {
    ...registerdValidators[target.constructor.name],
    [propName]: ['required'],
  };
  console.log(registerdValidators);
}

function PositiveNumber(target: any, propName: string) {
  registerdValidators[target.constructor.name] = {
    [propName]: ['positive'],
  };
}

function validate(obj: any): boolean {
  const objValidatorConfig = registerdValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    console.log(prop);
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

const courseForm = document.querySelector('form');
courseForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const titleVal = titleEl.value;
  const priceVal = +priceEl.value;

  console.log(titleVal.trim());
  const createdCourse = new Course(titleVal, priceVal);

  if (!validate(createdCourse)) {
    throw new Error('Validate Error!!');
    return;
  }
  // console.log(createdCourse);
});
