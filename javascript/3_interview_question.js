const income = {
  skills: 108,
  monthly() {
    return this.skills * 108;
  },
  yearly: () => 888 * this.skills,
};

// in this function call we will get the desired output because its a declarative function and in this function this refers to the income object
console.log(income.monthly());
// in this function this refers to the window object as it is a arrow function so we will get NaN in it.
console.log(income.yearly());
//https://rahuulmiishra.medium.com/this-keyword-in-javascript-2c9a206a904a
