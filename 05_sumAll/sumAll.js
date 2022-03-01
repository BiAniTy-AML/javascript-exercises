const sumAll = function (int1, int2) {
    // Handles possible errors
    switch (true) {
        case typeof int1 !== "number" || typeof int2 !== "number":
            return "ERROR";

        case int1 < 0 || int2 < 0:
            return "ERROR";

        case int1 > int2:
            let temp = int1;
            int1 = int2;
            int2 = temp;
            break;
    }

    let sum = 0;

    // Iterates every number smaller than int2 until int1
    sum_int: for (let i = 0; i <= int2; i++) {
        let num = int2 - i;

        switch (true) {
            case num < int1:
                break sum_int;

            case num >= int1:
                break;

            default:
                return "Problem with sum_int loop";
        }

        sum += num;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
