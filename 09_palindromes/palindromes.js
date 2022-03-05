const palindromes = function (string) {
    function is_letter(c) {
        return c.toLowerCase() !== c.toUpperCase();
    }

    let only_letters = "";
    for (let i = 0; i < string.length; i++) {
        if (is_letter(string.charAt(i))) {
            only_letters += string.charAt(i);
        }
    }

    only_letters = only_letters.toUpperCase();

    for (let i = 0; i < only_letters.length; i++) {
        let base = only_letters.charAt(i);
        let mirror = only_letters.charAt(only_letters.length - i - 1);

        switch (base === mirror) {
            case true:
                break;

            case false:
                return false;

            default:
                return "Problem with palindromes() func";
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
