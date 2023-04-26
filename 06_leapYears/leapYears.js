const leapYears = function(year) {
    if ((year % 100 === 0 && year % 400 != 0) || (year %4 != 0)){
        console.log("f");
        return false;
    }
    else {
        console.log("t");
        return true;
    }

};
leapYears(400);

// Do not edit below this line
module.exports = leapYears;
