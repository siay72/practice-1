const numbers = [3, 19, 7, 1, 15, 8, 5, 10, 4, 17, 6, 13, 12, 2, 20, 14, 9, 11, 18, 16];

const sortedNumbers = numbers.sort(function(a, b) {return a - b;});

console.log("Ascending Numbers:", sortedNumbers);