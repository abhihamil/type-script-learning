// creating the object of type person
/*
let user:Person;

user={
    name:'Abhishek',
    age:25,
    greetPerson(phrase:string){
        console.log(`${phrase},Mr ${this.name}`);
        
    }

};

user.greetPerson('Hello! Good Morning ');


*/
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase}, ${this.name}`);
    }
}
let greetMsg = 'Hello! Good mornig';
let user1 = new Person('Abhishek');
user1.greet(greetMsg);
let user2 = new Person('Abhimanyu');
user2.greet(greetMsg);
let user3 = new Person('Simran');
user3.greet(greetMsg);
