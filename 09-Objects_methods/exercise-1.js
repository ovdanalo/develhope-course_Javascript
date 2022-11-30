const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

const entries = Object.entries(person);

for (let entry of entries) {
  let [key, val] = entry;
  console.log (key + ': ' + val);
}

// I used Object.entries instead of Object.keys because
// the entry method gives me the key/val information, and
// through destructuring it's easy to print in whatever format

// is there another method using Object.keys and Object.values
// separately?