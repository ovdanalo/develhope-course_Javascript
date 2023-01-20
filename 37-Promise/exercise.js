const number = 11;

const isGreater = async () => {
    setTimeout(() => {
        try {
            if (number < 10) {
                throw new Error('The number is less than 10');
            } else {
                console.log(`The number is ${number}`);
            };
        } catch(err) {
            console.log(err);
        }
    }, 1000)
}

isGreater()