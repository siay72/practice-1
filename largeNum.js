const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const findLargest = (array) => {
  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }

  return largest;
};

const largeNumber = findLargest(numbers);
console.log("Largest Number:", largeNumber);