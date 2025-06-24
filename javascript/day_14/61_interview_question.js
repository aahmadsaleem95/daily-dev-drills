console.log(`${((x) => x)("I love")} JS`);
// output: I love JS

// There is an IFFE in the console log which passes "I love" into x which it the function and it returns it.
