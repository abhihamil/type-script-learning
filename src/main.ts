/*
const a=5;
const b=6;

console.log('result=',add(a,b));

function add(n1:number,n2:number) {
    return n1+n2;
}
*/

// objects

let person: {
  name: string;
  age: number;
  role: string[];
  department: [number, string];
} = {
  name: "abhi",
  age: 25,
  role: ["developer"],
  department: [1, "cse"],
};

console.log(person.name, person.age, person.role, person.department[1]);

// arrays

let arrOfHobbies = ["learning", "playing", "cooking", "dancing"];

arrOfHobbies.forEach((item) => {
  console.log(item.toUpperCase());
});

//tuples

let t1: [number, Boolean, string] = [1, true, "hello"];
const [x, y, z] = t1;
console.log(x, y, z);

// functions

function add(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(add(2, 3));

function greet(name: string): void {
  console.log("hello! ", name);
}
console.log("greet fun", greet("abhi"));

// object type

function objectTesting(obj: { x: number; y?: number }) {
  console.log(`x-axis is ${obj.x}`);
  if (obj.y !== undefined) console.log(`y-axis is ${obj.y}`);
}

objectTesting({ x: 6, y: 7 });

// enums
enum Roles {
  ADMIN,
  SUPPORT,
  DEVELOPER,
  TESTER,
}

let person1: {
  name: string;
  age: number;
  department: [number, string];
  role:number;
} = {
  name: "abhi",
  age: 25,
  department: [1, "cse"],
  role: Roles.DEVELOPER,
};

if ((person1.role = Roles.DEVELOPER)) {
  console.log("hie ! developer");
}

// union

// interface

interface Animal {
  name: string;
}
// interface Bear extends Animal{
//      walking():void{
//         console.log(`${this.name} is walking`);
//     }
// }
