const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (numbers) {
    let total = numbers.reduce((sum, number) => (sum += number), 0);

    return total;
};

const multiply = function (numbers) {
    let total = numbers.reduce((product, number) => (product *= number), 1);

    return total;
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (number) {
    let helper = number - 1;
    helper < 0 ? (number = 1) : (helper = helper);

    while (helper > 1) {
        number *= helper;
        helper--;
    }

    return number;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
