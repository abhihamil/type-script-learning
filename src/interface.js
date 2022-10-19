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
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log("".concat(phrase, ", ").concat(this.name));
    };
    return Person;
}());
var greetMsg = 'Hello! Good mornig';
var user1 = new Person('Abhishek');
user1.greet(greetMsg);
var user2 = new Person('Abhimanyu');
user2.greet(greetMsg);
var user3 = new Person('Simran');
user3.greet(greetMsg);
