/*
Type guards on type literals
--------------------------------
this cannnot be performed directly bzo a,b can be string also

function add(a:Combinable,b:Combinable){
    return a+b;
}
*/
// so you need to type guard this by applying if conditions using typepof operator
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return +a + +b;
    }
    return a + b;
}
console.log(add("5", "6"));
/*
function printEmployee(em:GenernalEmployee){
    console.log(em.name);
    console.log(em.privilages);   // this is not accessible bzo it does not known that it can
                                    receive privilages property in the object
}
*/
// you need to handle this using in operator ...
//like check the "property" is present "in" "object"
function printEmployee(em) {
    console.log("Employee : ".concat(em.name));
    if ("privilages" in em) {
        // here we are using "in" operator to check property is persent in object or not
        console.log("has privilages :".concat(em.privilages));
    }
    if ("startDate" in em) {
        console.log(em.startDate);
    }
}
var e1;
e1 = {
    name: "Abhishek",
    startDate: new Date(),
    privilages: ["dt_life"]
};
printEmployee(e1);
/**
 * Type guard on classes
 *
 * here you can use instance of class name to check whether that object belongs to t
 * that perticular class or not
 *
 */
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("car is driving.....");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Truck is driving...");
    };
    // here u have addition functionaility
    Truck.prototype.loadingCargo = function (wg) {
        console.log("Trucking is loading a cargo of wg :" + wg);
    };
    return Truck;
}());
function vehicleStatus(vehicle) {
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
var c1 = new Car();
var v1 = new Truck();
vehicleStatus(c1);
vehicleStatus(v1);
