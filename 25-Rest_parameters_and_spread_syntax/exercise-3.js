let numberStore = [0, 1, 2];
let newNumber = 3;
numberStore = [newNumber, ...numberStore];
console.log(numberStore);

//I now used the rest operator, but it isn't equivalent to the push, the push add the
// newNumber at the end, the rest operator in this case is more similar to a shift