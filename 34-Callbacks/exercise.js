function printAsyncName(firstName) {
    setTimeout(() => console.log(callback()), 1000);
    setTimeout(() => console.log(firstName), 3000);
}

const callback = () => "Hello" ;

printAsyncName("Alessandro");

// arrow functions permit to write a concise return statement in one line, omitting
// curly braces and even the return keyword