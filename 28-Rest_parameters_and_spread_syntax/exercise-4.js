function sum(...args) {
  return args.reduce((prevVal, currVal) => prevVal + currVal, 0)
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));