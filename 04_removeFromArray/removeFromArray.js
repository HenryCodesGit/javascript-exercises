const removeFromArray = function(arr, ...removeArray) {
    let output = [];

    arr.forEach((element) => {
        let found = false;
        for(i = 0; i< removeArray.length; i++){
            if(element === removeArray[i]){
                found = true;
                break;
            }
        }

        if(!found) output.push(element);
    });

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
