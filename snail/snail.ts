
const pushArr = (arr:number[], newArr:number[]) => {
    for (let i = 0; i < arr.length; i++) {
        const find = newArr.find((e) => e === arr[i]);
        if (!find) {
            newArr.push(arr[i]);
        }
    }
}

export const snail = (array:number[][]): number[] => {
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