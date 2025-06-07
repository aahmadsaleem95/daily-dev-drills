const code = {
  type: "web",
};

const reactJS = {
  name: "js",
  web: true,
};
// Tell which is not valid way
// A: reactJS[code.type]
// is valid

// B: reactJS[reactJS["type"]]
// is valid

// C: code.type.web
// is not valid

// D: All of them are valid
