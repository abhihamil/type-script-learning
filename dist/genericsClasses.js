class DataStorage {
    constructor() {
        this.data = [];
    }
    addData(item) {
        this.data.push(item);
    }
    removeData(item) {
        this.data.splice(this.data.indexOf(item));
    }
    getData() {
        return this.data;
    }
}
let strObj = new DataStorage();
strObj.addData("Abhi");
strObj.addData("Abhimanyu");
strObj.addData("sim");
console.log(strObj.getData());
let numObj = new DataStorage();
numObj.addData(1);
numObj.addData(2);
numObj.addData(3);
console.log(numObj.getData());
numObj.removeData(2);
console.log(numObj.getData());
