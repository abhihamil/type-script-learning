type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

/*
Type guards on type literals 
--------------------------------
this cannnot be performed directly bzo a,b can be string also 

function add(a:Combinable,b:Combinable){
    return a+b;
}
*/

// so you need to type guard this by applying if conditions using typepof operator

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return +a + +b;
  }
  return a + b;
}

console.log(add("5", "6"));

/**
 * type guard on type objects
 *
 */

type Admin = {
  name: string;
  privilages: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};
type GenernalEmployee = Admin | Employee;
/*
function printEmployee(em:GenernalEmployee){
    console.log(em.name);
    console.log(em.privilages);   // this is not accessible bzo it does not known that it can 
                                    receive privilages property in the object
}
*/

// you need to handle this using in operator ...
//like check the "property" is present "in" "object"

function printEmployee(em: GenernalEmployee) {
  console.log(`Employee : ${em.name}`);
  if ("privilages" in em) {
    // here we are using "in" operator to check property is persent in object or not
    console.log(`has privilages :${em.privilages}`);
  }
  if ("startDate" in em) {
    console.log(em.startDate);
  }
}
let e1: GenernalEmployee;
e1 = {
  name: "Abhishek",
  startDate: new Date(),
  privilages: ["dt_life"],
};

printEmployee(e1);

/**
 * Type guard on classes
 *
 * here you can use instance of class name to check whether that object belongs to t
 * that perticular class or not
 *
 */

class Car {
  drive() {
    console.log("car is driving.....");
  }
}
class Truck {
  drive() {
    console.log("Truck is driving...");
  }

  // here u have addition functionaility
  loadingCargo(wg: number) {
    console.log("Trucking is loading a cargo of wg :" + wg);
  }
}

// creating a new type which can be car of truck

type Vehicle = Car | Truck;

function vehicleStatus(vehicle: Vehicle) {
  vehicle.drive(); // this is easily accessible bzo its common in both the classes Car & Truck

  // to access other properties .... Use type Guard using "in" or by "instance of"
  /*
    if("loadingCargo" in vehicle){
        vehicle.loadingCargo(250);
    }
    */

  if (vehicle instanceof Truck) {
    vehicle.loadingCargo(250);
  }
}

let c1 = new Car();
let v1 = new Truck();
vehicleStatus(c1);
vehicleStatus(v1);
