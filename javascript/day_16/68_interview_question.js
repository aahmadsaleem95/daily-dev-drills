const person = {
  name: "Mashal",
  address: {
    city: "Lahore",
  },
};

Object.freeze(person);
// Object.freeze only freezes the object at level 1 only mean shallow freeze
person.name = null;
person.address.city = null;

// {name: "Mashal", address: {city: null}}
console.log(person);
