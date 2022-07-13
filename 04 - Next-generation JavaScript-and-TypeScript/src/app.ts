console.log('Time to get started...');
// const userName = 'Mohammad';
// userName = 'Mohammad';
// let age = 30;
//
// age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// const add = (a: number, b: number) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

// printOutput(add(5, 2));

const hobbies = ['sport', 'cookies'];
console.log(hobbies[0])

const activeHobbies = ['hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);

const me = {
    firstName: 'Mohammad',
    age: 29
};

const copiedMe = {...me}

const add = (...numbers: number[]) => {
    return numbers.reduce((currResult, currValue) => {
        return currResult + currValue
    }, 0)
};

const addNumbers = add(5, 10, 2, 3, 4, 3.8);
console.log(addNumbers)

const [hobby1, hobby2] = hobbies;
console.log(hobbies, hobby1, hobby2);

const {firstName: userName, age} = me;
console.log(userName);

