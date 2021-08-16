// Найти в массиве конкретное число

type ArrayType = number[];

const array: ArrayType = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

let count = 0;
const searchNumber = (array: ArrayType, item: number): number | null => {
    for (let i = 0; i < array.length; i++) {
        count++;
        if (array[i] === item) {
            return array[i];
        }
    }
    return null;
};
console.log(searchNumber(array, 5), count);
