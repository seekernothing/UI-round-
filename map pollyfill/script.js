// (element,index,array)

Array.prototype.myMap = function (callback) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      let element = this[i];
      let tranformed = callback(element, i, this);
      res.push(tranformed);
    }
  }
  return res;
};

let arr = [2, 4, 6];

const output = arr.myMap((x) => x * 2);

console.log(output);

const arr1 = ["sonu", "monu", "Tonu"];

const output1 = arr1.myMap((x) => x.toUpperCase());

console.log(output1);
