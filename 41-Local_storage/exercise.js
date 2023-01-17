const user = {
  id: 1,
  name: "John",
  age: 25,
};

let JSONuser = JSON.stringify(user);

localStorage.setItem('user', JSONuser);

let parsedUser = JSON.parse(localStorage.getItem('user'));
console.log(parsedUser);