const leapYears = function (year) {
    switch (true) {
        case year % 100 === 0:
            switch (true) {
                case year % 400 === 0:
                    return true;

                default:
                    return false;
            }

        case year % 4 === 0:
            return true;

        case year % 4 !== 0:
            return false;

        default:
            return "Error with the leapYears() function";
    }
};

// Do not edit below this line
module.exports = leapYears;
