const reverseString = function (string) {
    let text = "";

    for (let i = 0; i < string.length; i++) {
        text = text.concat(string.substr(-i - 1, 1));
    }

    return text;
};

// Do not edit below this line
module.exports = reverseString;
