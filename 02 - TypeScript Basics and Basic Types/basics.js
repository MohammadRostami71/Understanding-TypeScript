console.log('Time to get started...');
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1;
number1 = 10;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is : ';
add(number1, number2, printResult, resultPhrase);
