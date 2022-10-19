class Department {
  private name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  // Passing parameter type like below is imp
  describe(this: Department) {
    console.log(`department is ${this.name}`);
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }

  getEmployee() {
    console.log(`employess are ${this.employees}`);
  }
}

let depObj = new Department("CSE");

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
