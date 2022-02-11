// O(log n)

type ArrayType = number[];

const array: ArrayType = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let count = 0;
const binarySearchNumber = (array: ArrayType, item: number): number | null => {
    let low = 0;
    let high = array.length - 1;
    let mid;
    let currentNumber;

    while (low <= high) {
        count++;
        mid = Math.floor((low + high) / 2);
        currentNumber = array[mid];
        if (currentNumber === item) {
            return currentNumber;
        }
        if (currentNumber > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
};
console.log(binarySearchNumber(array, 15), count);

// с рекурсией
let countRecursive = 0;
const recursiveBinarySearch = (
    array: ArrayType,
    item: number,
    start: number,
    end: number
) => {
    let middle = Math.floor((start + end) / 2);
    countRecursive += 1;
    if (item === array[middle]) {
        return middle;
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1);
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end);
    }
};
console.log(recursiveBinarySearch(array, 0, 0, array.length), count);