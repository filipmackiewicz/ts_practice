function addd(n1: number, n2: number) {
    return n1 + n2;
}


function printResult (num: number):void {
    console.log('Result: ' + num);
}

printResult(addd(5,12));


let combineValues: (a:number, b:number) => number;

combineValues = addd;
// combineValues = printResult;

console.log(combineValues(8,8));
