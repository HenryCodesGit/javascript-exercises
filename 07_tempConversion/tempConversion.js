const convertToCelsius = function(F) {
  //The conversion for fahrenheight to celsius is the formula: (F − 32) × 5/9


  return Math.round(((F -32) * 5 / 9)*10)/10;
};

const convertToFahrenheit = function(C) {

    //The conversion for celsius to fahrenheight is the formula: C * 9/5 + 32

    return Math.round((C * 9 / 5 + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
