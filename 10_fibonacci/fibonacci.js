const fibonacci = function (position) {
    switch (true) {
        case position < 0:
            return "OOPS";
    }
    let nacci_seq = [];

    for (let i = 0; i < position; i++) {
        nacci_seq.length === 0 || nacci_seq.length === 1
            ? nacci_seq.push(1)
            : nacci_seq.push(nacci_seq[i - 1] + nacci_seq[i - 2]);
    }

    return nacci_seq[position - 1];
};

// Do not edit below this line
module.exports = fibonacci;
