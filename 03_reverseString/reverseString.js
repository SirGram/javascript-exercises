const charList= [];
let string = "";
const reverseString = function(sentence) {
    for (let i =0;i<=sentence.length;i++){
        const char = sentence[i];
        charList.push(char);

    }
    charList.reverse();
    string=charList.join("");
    return string;
};

// Do not edit below this line
module.exports = reverseString;
