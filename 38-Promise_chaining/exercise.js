const isLogged = true;

const user = {
    name: "John",
    age: 24
}

function random(isLogged) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { isLogged === true ? resolve(Math.random()) : reject(new Error("user is not logged in")) }, 1000)
    })
}

function returnUser(randNum) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {randNum > 0.5 ? resolve(console.log(user)) : reject(new Error ("something went wrong"))}, 500)
    })
}

random(isLogged)
.then(returnUser)
    .catch((err) => console.log(err));