function fibs(n) {
    let numArray = [];
    for (let i = 0; i < n; i++) {
        if (i > 1) {
            numArray.push(numArray.at(-1) + numArray.at(-2));
        } else if (i == 0) {
            numArray.push(0);
        } else if (i == 1) {
            numArray.push(1);
        }
    }
    return numArray;
}

// -- Test --
console.log(fibs(1));
console.log(fibs(5));
console.log(fibs(10));
console.log(fibs(20));
