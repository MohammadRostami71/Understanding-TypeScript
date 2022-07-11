type combinable = number | string;
type conversionDescriptor = 'as-number' | 'as-text';

function combine(input1: combinable, input2: number | string, resultConversion: conversionDescriptor) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString()
    }

    return result;

    // if (resultConversion === 'as-number') {
    //     return +result
    // } else {
    //
    //     return result.toString()
    // }
}

const combinedAge = combine(29, 21, 'as-number');
console.log(combinedAge)

const combineStringAges = combine('29', '21', 'as-number');
console.log(combineStringAges)

const combinedName = combine('Mohammad', 'Rostami', 'as-text');
console.log(combinedName)