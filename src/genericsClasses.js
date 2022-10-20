var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addData = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeData = function (item) {
        this.data.splice(this.data.indexOf(item));
    };
    DataStorage.prototype.getData = function () {
        return this.data;
    };
    return DataStorage;
}());
var strObj = new DataStorage();
strObj.addData("Abhi");
strObj.addData("Abhimanyu");
strObj.addData("sim");
console.log(strObj.getData());
var numObj = new DataStorage();
numObj.addData(1);
numObj.addData(2);
numObj.addData(3);
console.log(numObj.getData());
numObj.removeData(2);
console.log(numObj.getData());
