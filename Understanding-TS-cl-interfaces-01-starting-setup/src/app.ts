// Code goes here!

class Department {
  // name: string;
  protected employees: string[] = [];

  static fiscalYear = 2020;

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name}`);
  }

  addEmployee(name: string) {
    // validation etc
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  printEmployeeInfomation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('could not find a report');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please set the correct value');
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
}

const it = new ITDepartment('d1', ['Max']);
const accounting = new AccountingDepartment('d2', []);

it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
console.log(it);

accounting.addReport('Something');
accounting.printReports();

accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.mostRecentReport = 'Something example';
console.log(accounting.mostRecentReport);

const employee1 = Department.createEmployee('Max');

const fiscalYear = Department.fiscalYear;

console.log(employee1, fiscalYear);
// it.printEmployeeInfomation();

// const accountingCopy = { name: 'Dummy', describe: accounting.describe };
// accountingCopy.describe();
// new Department('Sales').describe()
// accounting.describe()
