const findTheOldest = function (people) {
    let highest_age = people.reduce((oldest_age, person) => {
        !person.yearOfDeath
            ? (person.yearOfDeath = new Date().getFullYear())
            : (person = person);

        return person.yearOfDeath - person.yearOfBirth > oldest_age
            ? (oldest_age = person.yearOfDeath - person.yearOfBirth)
            : (oldest_age = oldest_age);
    }, 0);

    let oldest = people.filter(
        (person) => person.yearOfDeath - person.yearOfBirth === highest_age
    );

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
