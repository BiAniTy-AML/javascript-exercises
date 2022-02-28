const repeatString = function (string, num) {
    switch (true) {
        case num < 0:
            return "ERROR";
    }

    let text = "";

    for (let i = 0; i < num; i++) {
        text = text.concat(string);
    }

    return text;
};

// Do not edit below this line
module.exports = repeatString;
