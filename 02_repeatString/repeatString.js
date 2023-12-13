const repeatString = function(s, n) {
    if(n < 0) return "ERROR";
    let output = "";

    for(let i = 0; i< n; i++){
        output += s;
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
