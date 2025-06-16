function checkAge(data) {
  if (data === { age: 18 }) {
    // false because objects are reference base
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    // same reason as references are different
    console.log("You are still an adult.");
  } else {
    console.log("hmm.. No age");
  }
}

checkAge({ age: 18 });
