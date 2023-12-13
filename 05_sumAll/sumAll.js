const sumAll = function(a, b) {
    //Boundary Conditions
    if (a< 0 || b< 0) return 'ERROR';
    if ( typeof a != "number" || typeof b != "number") return 'ERROR';


    let output = 0;

    //Put smaller number as 'a'.
    if (a > b){
        a += b
        b = a - b;
        a -= b;
    }

    for(i = a; i <= b; i++){
        output += i;
    }

    return output;
};

// Do not edit below this line
module.exports = sumAll;
