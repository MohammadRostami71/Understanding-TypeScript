function add(n1, n2) {
    return n1 + n2;
}
function addAndHandler(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
function printResult(num) {
    console.log('Result is : ' + num);
}
printResult(add(5, 2));
// let combineValues :Function;
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandler(29, 22, function (result) {
    console.log(result);
});
