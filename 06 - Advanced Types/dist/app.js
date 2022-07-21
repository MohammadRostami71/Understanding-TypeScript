"use strict";
var _a;
console.log('started...');
var e1 = {
    name: 'Mohammad',
    privileges: ['front-end developer'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: 'mamd', startDate: new Date() });
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving ...');
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck ...');
    };
    Truck.prototype.loadCarGo = function (amount) {
        console.log('amount car go ' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCarGo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log('speed is : ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 60 });
var userInputElement = document.getElementById('user-input');
userInputElement.value = 'hi';
var errorBag = {
    email: 'email is invalid',
    username: 'username is invalid',
};
var result = add('Mohammad', 'Rostami');
result.split(' ');
var fetchedUserData = {
    id: 'm1',
    name: 'mamad',
    job: {
        title: 'front-end',
        description: 'freelancer'
    }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
var userInput = null;
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'default';
console.log(storedData);
//# sourceMappingURL=app.js.map