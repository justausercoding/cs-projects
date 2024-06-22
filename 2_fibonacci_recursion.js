function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function fibsRec(n) {
    let numArray = [];
    for (let i = 0; i < n; i++) {
        numArray.push(fibonacci(i));
    }
    return numArray;
}

// -- Test --
console.log(fibsRec(1));
console.log(fibsRec(5));
console.log(fibsRec(10));
console.log(fibsRec(20));
