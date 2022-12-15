function sum(...args) {
    return args.reduce((prevNum, num) => prevNum + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));