let hobbies = ['cricket', 'learning', 'cooking'];
let activeHobbies = ['hiking', ...hobbies];
console.log(activeHobbies);
let student = {
    name: 'Abhishek',
    age: 25
};
let newStudent = Object.assign(Object.assign({}, student), { role: 'developer' });
console.log(newStudent);
