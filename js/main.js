/*
const a=5;
const b=6;

console.log('result=',add(a,b));

function add(n1:number,n2:number) {
    return n1+n2;
}
*/
// objects
var person = {
    name: 'abhi',
    age: 25,
    role: ['developer'],
    department: [1, 'cse']
};
console.log(person.name, person.age, person.role, person.department[1]);
// arrays
var arrOfHobbies = ['learning', 'playing', 'cooking', 'dancing'];
arrOfHobbies.forEach(function (item) {
    console.log(item.toUpperCase());
});
//tuples
var t1 = [1, true, 'hello'];
var x = t1[0], y = t1[1], z = t1[2];
console.log(x, y, z);
// functions
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(2, 3));
function greet(name) {
    console.log("hello! ", name);
}
console.log("greet fun", greet('abhi'));
// object type
function objectTesting(obj) {
    console.log("x-axis is ".concat(obj.x));
    if (obj.y !== undefined)
        console.log("y-axis is ".concat(obj.y));
}
objectTesting({ x: 6, y: 7 });
// enums
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["SUPPORT"] = 1] = "SUPPORT";
    Roles[Roles["DEVELOPER"] = 2] = "DEVELOPER";
    Roles[Roles["TESTER"] = 3] = "TESTER";
})(Roles || (Roles = {}));
var person1 = {
    name: 'abhi',
    age: 25,
    department: [1, 'cse'],
    role: Roles.DEVELOPER
};
if (person1.role = Roles.DEVELOPER) {
    console.log("hie ! developer");
}
// interface Bear extends Animal{
//      walking():void{
//         console.log(`${this.name} is walking`);
//     }
// }
