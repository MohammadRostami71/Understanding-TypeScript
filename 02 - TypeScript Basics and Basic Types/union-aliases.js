function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //     return +result
    // } else {
    //
    //     return result.toString()
    // }
}
var combinedAge = combine(29, 21, 'as-number');
console.log(combinedAge);
var combineStringAges = combine('29', '21', 'as-number');
console.log(combineStringAges);
var combinedName = combine('Mohammad', 'Rostami', 'as-text');
console.log(combinedName);
