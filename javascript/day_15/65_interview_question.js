const user = {
  email: "abc@domain.com",
  updateEmail: (email) => {
    this.email = email;
  },
  updateEmailSimple: function (email) {
    this.email = email;
  },
};
// as we know that arrow function this is of that of its parent and in this case its window object so on window.email = 'latest@email.in'
user.updateEmail("latest@email.in");
console.log(user.email);
console.log(window.email);

user.updateEmailSimple("latest@email.in");
console.log(user.email);
