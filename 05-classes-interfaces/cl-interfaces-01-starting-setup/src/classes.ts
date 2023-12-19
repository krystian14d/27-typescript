abstract class Department {
  static fiscalYear = 2023;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe() {
    console.log('IT department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error('No report found');
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a value!');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new AccountingDepartment('d2', []);
      return this.instance;
    }
  }

  describe() {
    console.log('Accounting department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    } else {
      this.employees.push(name);
    }
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new Department('id', 'Accounting');

// // console.log(accounting);
// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');

// accounting.describe();
// accounting.printEmployeeInformation();
// const accountingCopy = {name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();

const employee1 = Department.createEmployee('Max');

const it = new ITDepartment('d1', ['Max']);
console.log(it);
it.addEmployee('Max');
it.addEmployee('Manu');

const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went worng...');
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeeInformation();
accounting.describe();
