const fibonacci = function(n, memo = [1,1]) {
    //If the sequence has not yet been been calculated up to n then calculate it
    n = parseInt(n);

    if(n==0) return 0;
    if(n<0) return "OOPS";

    while(n > memo.length){
        memo[memo.length] = memo[memo.length-1] + memo[memo.length-2];
    }

    return memo[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
