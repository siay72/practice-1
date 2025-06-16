const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const uniqueNumbers = (array) => {
  let unique = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (!unique.includes(element)) {
      unique.push(element);
    }
  }

  return unique;
};

const uniqueNum = uniqueNumbers(numbers);
console.log("Unique Numbers:", uniqueNum);