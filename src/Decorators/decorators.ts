// creatig decorator Logger
function Logger(className: string) {
  return function (constructor: Function) {
    console.log("Logging..." + className);
    console.log(constructor);
  };
}

// creating new decorator

function WithTemplate(template: string, hookId: string) {
  return function (constructor: Function) {
    // fetch element id
    const hookEleId = document.getElementById(hookId);
    console.log("from decorator" + hookEleId);
    // check if id is not null
    if (hookEleId) {
      hookEleId.innerHTML = template;
    }
  };
}

// attaching this class with @decorator name
//@Logger("student")

@WithTemplate('<h1>My person obj</h1>', 'app')
class Student {
  name = "Abhi";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Student();

console.log(pers);
