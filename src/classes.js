var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    // Passing parameter type like below is imp
    Department.prototype.describe = function () {
        console.log("department is ".concat(this.name));
    };
    Department.prototype.addEmployee = function (name) {
        this.employees.push(name);
    };
    Department.prototype.getEmployee = function () {
        console.log("employess are ".concat(this.employees));
    };
    return Department;
}());
var depObj = new Department("CSE");
depObj.describe();
depObj.addEmployee("Abhishek");
depObj.addEmployee("Abhimanyu");
depObj.addEmployee("Simran");
depObj.getEmployee();
// let depObj2={describe:depObj.describe}
// console.log(depObj2.describe());
/**
 The 'this' context of type '{ describe: (this: Department) => void; }' is not assignable to method's 'this' of type 'Department'.
  Property 'name' is missing in type '{ describe: (this: Department) => void; }' but required in type 'Department'.

19 console.log(depObj2.describe());
               ~~~~~~~

  src/classes.ts:2:5
    2     name:string;
          ~~~~
    'name' is declared here.

[20:44:21] Found 1 error. Watching for file changes
 */
// let depObj2 = {
//   name: "ECS",
//   describe: depObj.describe,
// };
// console.log(depObj2.describe());
