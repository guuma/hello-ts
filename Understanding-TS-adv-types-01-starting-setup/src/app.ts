function Logger(logString: string) {
  console.log('Logger: decorator factory');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('WithTemplate: decorator factory');
  return function (constructor: any) {
    console.log('@WithTemplete: Outputting log');
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
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

const pers = new Person();

console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property Decorator');
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

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

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
