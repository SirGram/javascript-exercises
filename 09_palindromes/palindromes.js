const palindromes = function (string) {
    return string.split("").reverse().join("") === string;
};

// Do not edit below this line
module.exports = palindromes;
