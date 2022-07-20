var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Code goes here!
console.log('started ...');
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private name: string;
        this.employees = [];
        this.employees2 = [];
        // this.id = id;
        // this.name = n;
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.addEmployee2 = function (employee) {
        this.employees2.push(employee);
    };
    Department.prototype.printEmployeesInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
        console.log(this.employees2);
    };
    Department.Year = 2022;
    return Department;
}());
var employeeStatic = Department.createEmployee('mamad');
console.log(employeeStatic, Department.Year);
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    // admins: string[];
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
        // this.admins = admins;
    }
    ITDepartment.prototype.describe = function () {
        console.log('ITDepartment : ' + this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        // this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found');
        },
        set: function (value) {
            if (!value) {
                throw new Error('value is invalid');
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.describe = function () {
        console.log(' describe AccountingDepartment' + this.id);
    };
    AccountingDepartment.getInstance = function () {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.addEmployeeAccounting = function (employee) {
        if (employee === 'mamad') {
            return;
        }
        this.employees2.push(employee);
    };
    AccountingDepartment.prototype.getReport = function () {
        console.log(this.reports.length);
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var computer = new ITDepartment('D1', ['Mohammad']);
// const accountingDepartment = new AccountingDepartment('D2', []);
var accountingDepartment = AccountingDepartment.getInstance();
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
accountingDepartment.mostRecentReport = 'test setter';
console.log(accountingDepartment.mostRecentReport);
accountingDepartment.describe();
