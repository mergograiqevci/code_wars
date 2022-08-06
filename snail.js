// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

const pushArr = (arr, newArr) => {
    for (let i = 0; i < arr.length; i++) {
        const find = newArr.find((e) => e === arr[i]);
        if (!find) {
            newArr.push(arr[i]);
        }
    }
}

const snail = (array) => {
    const maxColumn = array[0].length - 1;
    let row = 0;
    let column = maxColumn;
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        let copyArray = [...array];
        const rowArr = i % 2 === 0 ? copyArray[row] : copyArray[row].reverse();
        copyArray = [...array];
        const columnArray = (i % 2 === 0 ? copyArray : copyArray.reverse()).map((d) => { return d[column] });

        pushArr(rowArr, newArr);
        pushArr(columnArray, newArr);

        if (row === 0) {
            column = 0
            row = maxColumn;
        }
        else {
            if (row === maxColumn) {
                row = 1;
                column = maxColumn - 1;
            }
            else {
                row++;
                column--;
            }
        }
    }
    return newArr;

}

const arr = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

const arr1 = [[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]

console.log(JSON.stringify(snail(arr)) === JSON.stringify([1, 2, 3, 6, 9, 8, 7, 4, 5]));
console.log(JSON.stringify(snail(arr1)) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(snail(arr))