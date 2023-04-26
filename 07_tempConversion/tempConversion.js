const convertToCelsius = function(degrees) {
  return Math.round((degrees - 32) * 5/9);
};

const convertToFahrenheit = function(degrees) {
  return Math.round((degrees * 9/5) + 32);
 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
