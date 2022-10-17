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
    role
} = {
    name: 'abhi',
    age: 25,
    role: [5, 'developer']
};

console.log(person.name, person.age, person.role);

// arrays

let arrOfHobbies = ['learning', 'playing', 'cooking', 'dancing'];

arrOfHobbies.forEach(item => {

    console.log(item.toUpperCase());
});


//tuples

let t1: [number, Boolean, string] = [1, true, 'hello'];
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
console.log("greet fun", greet('abhi'));


// object type

function objectTesting(obj: { x: number, y?: number }) {
    console.log(`x-axis is ${obj.x}`);
    if (obj.y !== undefined)
        console.log(`y-axis is ${obj.y}`);
}

objectTesting({ x: 6, y: 7 });


// union


// interface

    interface Animal{
        name:string
}
// interface Bear extends Animal{
//      walking():void{
//         console.log(`${this.name} is walking`);
//     }
// }

