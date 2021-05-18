// Code goes here!

class Department {
  // name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
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
  reports: string[];
  constructor(id: string, reports: string[]) {
    super(id, 'Accounting');
    this.reports = reports;
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
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
console.log(accounting);

// it.printEmployeeInfomation();

// const accountingCopy = { name: 'Dummy', describe: accounting.describe };
// accountingCopy.describe();
// new Department('Sales').describe()
// accounting.describe()