const findTheOldest = function(people) {
    let initialOldest = {
        person: {},
        age: -1
    }

    return people.reduce(
        (currentOldest, currentPerson) =>{

            let currentAge = -currentPerson.yearOfBirth + (currentPerson.yearOfDeath == null ? new Date().getFullYear() : currentPerson.yearOfDeath);

            if(currentAge > currentOldest.age){
                return {person: currentPerson, age: currentAge};
            } else {
                return currentOldest;
            }
        }
        ,initialOldest).person;
};

// Do not edit below this line
module.exports = findTheOldest;
