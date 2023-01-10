const selectionSort = function (array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    [array[i], array[minIdx]] = [array[minIdx], array[i]];
  }
  return array;
};

const array1 = [6, 4, 5, 1];
const array2 = [0];
const array3 = [1, 1];
const array4 = [];

console.log(selectionSort(array1), '<-- Selection Sort');
console.log(selectionSort(array2), '<-- Selection Sort');
console.log(selectionSort(array3), '<-- Selection Sort');
console.log(selectionSort(array4), '<-- Selection Sort');
