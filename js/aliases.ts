type combinable = number | string;
type resultCoversion = "as-number" | "as-string";

function combine(
  input1: combinable,
  input2: combinable,
  finalResult: resultCoversion
) {
  let result;

  // This condition will always return 'false'
  //since the types '"as-number" | "as-string"' and '"as-numbe"' have no overlap.

  // if (typeof input1 === "number" && input2 === "number" && finalResult==='as-numbe') {
  //   return input1 + input2;
  // }

  if (
    (typeof input1 === "number" && input2 === "number") ||
    finalResult === "as-number"
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

let addResult = combine(4, 6, "as-number");
console.log(`result after addition is ${addResult}`);
let asNumberResult = combine("14", "16", "as-number");
console.log(`asNumberResult after addition is ${asNumberResult}`);

let concateResult = combine("abhi", "manyu", "as-string");
console.log(`result after addition is ${concateResult}`);

// you can use type aliases not only with union types but can also be used with complex objects
type user = { name: string; email: string; age: number };


function getUserDetails(userObj: user) {
  console.log(
    `Hi! ${userObj.name}.Your's email is ${userObj.email} and your age is ${userObj.age}`
  );
}

getUserDetails({ name: "Abhishek", email: "abhihamil@gmail.com", age: 26 });
