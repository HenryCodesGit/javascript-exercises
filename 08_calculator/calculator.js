const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a -b;
};

const sum = function(args) {
	let output = 0;

  args.forEach((item) => {
    output += item;
  })

  return output;
};

const multiply = function(args) {
  let output = 1;

  args.forEach((item) => {
    output *= item;
  })

  return output;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if(a == 0) return 1;

  let output = 1;
  for(i = 1; i<= a; i++){
    output *= i;
  }

  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
