const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, curr, index) => acc + curr, 2);
console.log(result); // 17

Array.prototype.myCustomReduce = function (callback, initialValue) {
    let accumulator = initialValue ?? this[0];
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator;
};

const customResult = arr.myCustomReduce((acc, curr) => acc + curr);
console.log(customResult); // 15
