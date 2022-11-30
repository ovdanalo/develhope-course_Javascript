const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = 'Simon';
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

// both firstName value in the two obj have changed because with the 'const person2 = person1' assignation
// we are copying by reference the object, both objects are pointing to the same address
// in memory. To avoid this it has to be created another object where only the values are copied
// with Object.assign() or the spread operator (...person1) for a deep copy