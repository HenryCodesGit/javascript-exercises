

const palindromes = function (s) {

//Doto: Two pointers, once they are at same index or cross the function is done
//If a pointer comes across a non-letter value, then just increment to next index
let p1 = 0
let p2 = s.length-1;

let regex = /[a-zA-Z0-9]/;

while(p1 < p2 && p1 < s.length && p2 >= 0){
    if(!s[p1].match(regex)){
        p1++; //Increment p1 if its not currently looking at a letter
        continue;
    }

    if(!s[p2].match(regex)){
        p2--; //Decrement p2 if its not currently looking at a letter
        continue;
    }

    //At this point they must be both looking at letters. If they're looking at the same letters, then continue searching
    //Otherwise, they're looking at different letters and therefore this cannot be a palindrome
    if(s[p1].toLowerCase() == s[p2].toLowerCase()){
        p1++;
        p2--;
        continue;
    }

    return false;
}

//If it makes it this far, then it must be a palindrome
return true;
};

// Do not edit below this line
module.exports = palindromes;
