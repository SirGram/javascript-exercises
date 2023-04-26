const fibonacci = function(number) {
    let list = [];
    let prev = 0;
    let curr = 1;
    
    for (let i = 1; i <= number; i++) {
        list.push(curr);
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    console.log(list[list.length-1]);
    return list[list.length - 1];
};


fibonacci(10);

// Do not edit below this line
module.exports = fibonacci;
