for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 5);
}
// let variable does not get hoisted
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 5);
}
