const obj = {};

obj[(obj["A"] = "B")] = "C";

console.log(obj);
// output
// {A: 'B', B: 'C'}
// obj['A']='B' will return 'B' as a string
// obj['A']='B'; const key = obj['A']; obj[key]='C';
