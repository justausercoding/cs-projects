function merge(arrOne, arrTwo) {
    let sortedArr = [];
    while (true) {
        if (arrOne[0] <= arrTwo[0]) {
            sortedArr.push(arrOne[0]);
            arrOne.shift();
        } else if (arrOne[0] >= arrTwo[0]) {
            sortedArr.push(arrTwo[0]);
            arrTwo.shift();
        } else if (arrOne.length == 0 && arrTwo.length > 0) {
            sortedArr.push(arrTwo[0]);
            arrTwo.shift();
        } else if (arrTwo.length == 0 && arrOne.length > 0) {
            sortedArr.push(arrOne[0]);
            arrOne.shift();
        } else {
            return sortedArr;
        }
    }
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let middle = Math.floor(arr.length / 2);
        let leftSide = mergeSort(arr.slice(0, middle));
        let rightSide = mergeSort(arr.slice(middle));

        return merge(leftSide, rightSide);
    }
}

// -- Tests --
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([23, 43, 12, 1, 32, 54, 32]));
