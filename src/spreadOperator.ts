let hobbies=['cricket','learning','cooking'];

let activeHobbies=['hiking',...hobbies];

console.log(activeHobbies);

let student:{name:string,age:number}={
    name:'Abhishek',
    age:25
}

let newStudent={...student,role:'developer'};

console.log(newStudent);
