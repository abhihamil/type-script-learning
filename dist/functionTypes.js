function add(n1, n2) {
    return n1 + n2;
}
function printResult(result) {
    console.log(`result is ${result}`);
}
// here we are pointing add function to combineValue
let combineValue;
// and executing combineValue
combineValue = add;
printResult(combineValue(3, 5));
// you cannotcall combineValue to  different function bzo we have assigned combineValue to fixed
// function type
//combineValue=printResult;
//Expected 2 arguments, but got 1.ts(2554)
//functionTypes.ts(10, 28): An argument for 'b' was not provided.
//combineValue(5);
// function type and call back
function addAndHandle(n1, n2, cb) {
    let result = n1 + n2;
    console.log("result before call back....");
    cb(result);
}
addAndHandle(3, 5, (callBackResult) => {
    console.log(`result inside callback is ${callBackResult}`);
});
