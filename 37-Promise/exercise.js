const number = 9;

function isGreater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {number > 10 ? resolve(number):reject(new Error ("number is lower than 10"))}, 1000)
    } );
}

isGreater()
.then(() => console.log(`The number is ${number}`))
.catch((err) => console.log(err));