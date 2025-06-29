const pets = ["🐶", "🦉"];

// with the help of these round/moon brackets it is converted to a expression otherwise it would be an invalid code.
({ item: pets[2] } = { item: "🐼" });

// output: ['🐶', '🦉', '🐼']
console.log(pets);
