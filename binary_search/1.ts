// O(log n)

type ArrayType = number[];

const array: ArrayType = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let count = 0;
const binarySearchNumber = (array: ArrayType, item: number): number | null => {
    let lowIndex = 0
    let highIndex = array.length - 1

    while (lowIndex <= highIndex) {
        const middleIndex = Math.floor((lowIndex + highIndex) / 2)
        const guess = array[middleIndex]
        count++;

        if (guess === item) {
            return guess
        }
        if (guess > item) {
            highIndex = middleIndex - 1
        }
        if (guess < item) {
            lowIndex = middleIndex + 1
        }
    }
    return null;
};
console.log(binarySearchNumber(array, 15), count);

// с рекурсией
// let countRecursive = 0;
// const recursiveBinarySearch = (
//     array: ArrayType,
//     item: number,
//     start: number,
//     end: number
// ) => {
//     let middle = Math.floor((start + end) / 2);
//     countRecursive += 1;
//     if (item === array[middle]) {
//         return middle;
//     }
//     if (item < array[middle]) {
//         return recursiveBinarySearch(array, item, 0, middle - 1);
//     } else {
//         return recursiveBinarySearch(array, item, middle + 1, end);
//     }
// };
// console.log(recursiveBinarySearch(array, 0, 0, array.length), count);
