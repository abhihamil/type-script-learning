

// interfaces are used to define the objects
interface Name{
    name:string;
}

// you can also inherit interface using extends keyword.
interface Greetable extends Name{
    greet(phrase:string):void;
}

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

class Person implements Greetable{
    name:string;
    constructor(n:string){
        this.name=n;
    }
    greet(phrase:string){
        console.log(`${phrase}, ${this.name}`);
        
    }

}

let greetMsg:string='Hello! Good mornig';
let user1=new Person('Abhishek');
user1.greet(greetMsg);

let user2=new Person('Abhimanyu');
user2.greet(greetMsg);

let user3=new Person('Simran');
user3.greet(greetMsg);
