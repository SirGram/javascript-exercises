const add = function(a,b) {
  return a + b;	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.length
    ? array.reduce((total,current) => total * current, 0)
    : 0;
};

const power = function(a,b) {
  return a ** b;
	
};

const factorial = function(a) {
  let r = 1;
  for (let i=a; i<=a; i--) {
    r*=i;
  }
  return r;
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
