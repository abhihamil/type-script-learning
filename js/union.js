function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var addResult = combine(4, 6);
console.log("result after addition is ".concat(addResult));
var concateResult = combine('abhi', 'manyu');
console.log("result after addition is ".concat(concateResult));
