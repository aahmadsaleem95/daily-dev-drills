const Person = {
  lang: "JS",
  show: function () {
    console.log(`Hi,${this.lang}`);
  },
};

let fn = Person.show;
fn();

// output

// Hi,undefined
// because fn() is getting called in windows context not in Person Object context

// to resolve this issue we can
fn.call(Person);
// output
// Hi,JS
// or another solution
Person.show();
// output
// Hi,JS
