function add(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return +n1 + +n2;
    }
    else if (typeof n1 === "number" || typeof n2 === "number") {
        return +n1 + +n2;
    }
}
console.log(add(3, 5));
console.log(add("3", 5));
function mergeObject(obj1, obj2) {
    var result = { obj1: obj1, obj2: obj2 };
    return result;
}
console.log(mergeObject({ name: "Abhi" }, { age: 25 }));
