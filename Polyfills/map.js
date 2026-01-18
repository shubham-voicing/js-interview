// Array Map Method Polyfill

const arr = [1, 2, 3, 4, 5];
const result = arr.map((num) => num * 2);
console.log(result); // [2, 4, 6, 8, 10]


Array.prototype.myCustomMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};
const customResult = arr.myCustomMap((num) => num * 2);
console.log(customResult); // [2, 4, 6, 8, 10]