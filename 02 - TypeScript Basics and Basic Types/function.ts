function add(n1: number, n2: number): number {
    return n1 + n2
}

function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

function printResult(num: number): void {
    console.log('Result is : ' + num)
}

printResult(add(5, 2))

// let combineValues :Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8))

addAndHandler(29, 22, (result) => {
    console.log(result)
})