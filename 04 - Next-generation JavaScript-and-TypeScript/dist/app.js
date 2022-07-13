"use strict";
console.log('Time to get started...');
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
const hobbies = ['sport', 'cookies'];
console.log(hobbies[0]);
const activeHobbies = ['hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const me = {
    firstName: 'Mohammad',
    age: 29
};
const copiedMe = Object.assign({}, me);
const add = (...numbers) => {
    return numbers.reduce((currResult, currValue) => {
        return currResult + currValue;
    }, 0);
};
const addNumbers = add(5, 10, 2, 3, 4, 3.8);
console.log(addNumbers);
const [hobby1, hobby2] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName: userName, age } = me;
console.log(userName);
//# sourceMappingURL=app.js.map