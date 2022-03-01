const removeFromArray = function (array) {
    // Array with all the removed items
    let removed;

    // Array of arguments
    let args = Array.from(arguments).sort();

    // Iterates every item in the array and check if they match the args
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j <= args.length; j++) {
            switch (true) {
                case j === args.length:
                    break;

                // If they do, remove that item from the array
                case array[i] === args[j]:
                    removed = array.splice(i, 1);
                    break;

                // Otherwise, ignore them
                case array[i] !== args[j]:
                    break;

                default:
                    return "Something wrong with the removeFromArray() function";
            }
        }
    }

    return array;
};

console.log(removeFromArray([1, 2, 3, 4], 1, 4));

// Do not edit below this line
module.exports = removeFromArray;
