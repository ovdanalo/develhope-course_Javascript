class Person {
    constructor (firstName, lastName, age) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._age = age;
    }
    get firstName () {
      return this._firstName;
    }
    get lastName () {
      return this._lastName;
    }
    get age () {
      return this._age;
    }
    get fullName () {
      return this.firstName + ' ' + this.lastName;
    }

    set firstName (newVal) {
      this._firstName = newVal;
    }

    set lastName (newVal) {
      this._lastName = newVal;
    }

    set age (newVal) {
      this._age = newVal;
    }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);