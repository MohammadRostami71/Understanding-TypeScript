// Code goes here!
console.log('started ...')

abstract class Department {
    static Year = 2022;
    // private name: string;
    private employees: string[] = [];
    protected employees2: string[] = [];

    constructor(protected readonly id: string, private name: string) {
        // this.id = id;
        // this.name = n;
    }

    static createEmployee(name: string) {
        return {name: name}
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    addEmployee2(employee: string) {
        this.employees2.push(employee);
    }


    printEmployeesInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
        console.log(this.employees2)
    }
}

const employeeStatic = Department.createEmployee('mamad');
console.log(employeeStatic, Department.Year);

class ITDepartment extends Department {
    // admins: string[];

    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
        // this.admins = admins;
    }

    describe() {
        console.log('ITDepartment : ' + this.id)
    }
}

class AccountingDepartment extends Department {
    // reports: string[];
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found')
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('value is invalid')
        }
        this.addReport(value);
    }

    describe() {
        console.log(' describe AccountingDepartment' + this.id)
    }

    private constructor(id: string, public reports: string[]) {
        super(id, 'Accounting');
        // this.reports = reports;
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    addEmployeeAccounting(employee: string) {
        if (employee === 'mamad') {
            return;
        }
        this.employees2.push(employee);
    }

    getReport() {
        console.log(this.reports.length);
        console.log(this.reports);
    }
}

const computer = new ITDepartment('D1', ['Mohammad']);
// const accountingDepartment = new AccountingDepartment('D2', []);

const accountingDepartment = AccountingDepartment.getInstance();

console.log(computer);
console.log(accountingDepartment);
computer.addEmployee('Mohammad');
computer.addEmployee('Rostami');
computer.describe();
// private not accessible
// computer.employees[2] = 'user';
computer.printEmployeesInformation();
// const computerCopy = {name: 'Fake', describe: computer.describe}
// console.log(computerCopy.describe());
accountingDepartment.addReport('hi this is report');
accountingDepartment.getReport();
accountingDepartment.addEmployeeAccounting('mamad');
accountingDepartment.addEmployeeAccounting('Dash Mamad');
accountingDepartment.printEmployeesInformation();
accountingDepartment.mostRecentReport = 'test setter'
console.log(accountingDepartment.mostRecentReport)
accountingDepartment.describe();