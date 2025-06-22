const box = { x: 10, y: 20 };
// once we freeze a object it cannot be no updation, deletion, insertion
Object.freeze(box);

const shape = box;
shape.x = 100;
shape.z = 20;

// output: {x:10,y:20}
console.log(shape);
