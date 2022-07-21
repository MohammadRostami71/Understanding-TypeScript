"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log('started ...');
var names = [];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('this is done!');
    }, 2000);
});
promise.then(function (data) {
    data.split(' ');
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObject = merge({ name: 'mohammad' }, { age: 29 });
console.log(mergedObject);
function CountAndDescribe(element) {
    var descriptionText = 'description Text';
    if (element.length > 0) {
        descriptionText = 'description Text : ' + element.length;
    }
    return [element, descriptionText];
}
console.log(CountAndDescribe('mohammad'));
function extractAndConvert(obj, key) {
    return 'Value : ' + obj[key];
}
console.log(extractAndConvert({ name: 'mohammad' }, 'name'));
var DataStorage = (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('mamad');
textStorage.addItem('Mohammad');
textStorage.removeItem('mamad');
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
var objectStorage = new DataStorage();
objectStorage.addItem({ name: 'Mohammad' });
objectStorage.addItem({ name: 'rostami' });
objectStorage.removeItem({ name: 'rostami' });
console.log(objectStorage.getItems());
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
var names2 = ['mohammad', 'mamad'];
//# sourceMappingURL=app.js.map