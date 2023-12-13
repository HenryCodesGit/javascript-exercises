const reverseString = function(s) {
    let output = '';

    for(i = s.length-1; i>=0; i--){
        output += s[i];
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
