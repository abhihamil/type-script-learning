var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// creatig decorator Logger
function Logger(className) {
    return function (constructor) {
        console.log("Logging..." + className);
        console.log(constructor);
    };
}
// creating new decorator
function WithTemplate(template, hookId) {
    return function (constructor) {
        // fetch element id
        var hookEleId = document.getElementById(hookId);
        console.log("from decorator" + hookEleId);
        // check if id is not null
        if (hookEleId) {
            hookEleId.innerHTML = template;
        }
    };
}
// attaching this class with @decorator name
//@Logger("student")
var Student = /** @class */ (function () {
    function Student() {
        this.name = "Abhi";
        console.log("Creating person object...");
    }
    Student = __decorate([
        WithTemplate('<h1>My person obj</h1>', 'app')
    ], Student);
    return Student;
}());
var pers = new Student();
console.log(pers);
