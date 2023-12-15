const getTheTitles = function(books) {
    let output = [];

    books.forEach((b)=>output.push(b.title));

    return output;
};

// Do not edit below this line
module.exports = getTheTitles;
