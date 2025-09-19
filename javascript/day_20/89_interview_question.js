let x = 10;
let y = "A";
[x, y] = [y, x];

console.log({ x, y });

// output
// {x:'A', y:10}
