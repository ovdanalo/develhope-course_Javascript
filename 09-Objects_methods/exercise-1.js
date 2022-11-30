const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

const keys = Object.keys(person);
const values = Object.values(person);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + ': ' + values[i])
}


// version 2, with Object.entries

// const entries = Object.entries(person);

// for (let entry of entries) {
//   let [key, val] = entry;
//   console.log(key + ': ' + val);
// }