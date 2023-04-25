const removeFromArray = function(array, elements) {
    let i=0;
    while(i< array.length){
        if (elements.includes(array[i])){
            array.splice(i,1);
        }
        else i++;

    }
    console.log(array);
    return array;
};
removeFromArray([23,6,32,8,8],[32]);

// Do not edit below this line
module.exports = removeFromArray;
