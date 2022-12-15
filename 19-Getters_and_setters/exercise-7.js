class Person {
    constructor (firstName, lastName, age) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._age = age;
    }
    get _firstName () {
      return this.firstName;
    }
    get _lastName () {
      return this.lastName;
    }
    get _age () {
      return this.age;
    }
    get fullName () {
      return this.firstName + ' ' + this.lastName;
    }

    set _firstName (newVal) {
      this.firstName = newVal;
    }

    set _lastName (newVal) {
      this.lastName = newVal;
    }

    set _age (newVal) {
      this.age = newVal;
    }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);