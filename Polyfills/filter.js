const arr = [1, 2, 3, 4, 5, 6]
const result = arr.filter((num) => num % 2 === 0);
console.log(result); // [2, 4, 6]


Array.prototype.myCustomFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
const customResult = arr.myCustomFilter((num) => num % 2 === 0);
console.log(customResult); // [2, 4, 6]