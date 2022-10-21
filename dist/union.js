function combine(input1, input2) {
    let result;
    if (typeof input1 === "number" && input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
let addResult = combine(4, 6);
console.log(`result after addition is ${addResult}`);
let concateResult = combine("abhi", "manyu");
console.log(`result after addition is ${concateResult}`);
