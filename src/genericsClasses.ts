class DataStorage<T> {
  data: T[] = [];

  addData(item: T) {
    this.data.push(item);
  }
  removeData(item: T) {
    this.data.splice(this.data.indexOf(item));
  }

  getData() {
    return this.data;
  }
}

let strObj = new DataStorage<string>();
strObj.addData("Abhi");
strObj.addData("Abhimanyu");
strObj.addData("sim");
console.log(strObj.getData());

let numObj = new DataStorage<number>();
numObj.addData(1);
numObj.addData(2);
numObj.addData(3);
console.log(numObj.getData());
numObj.removeData(2);
console.log(numObj.getData());
