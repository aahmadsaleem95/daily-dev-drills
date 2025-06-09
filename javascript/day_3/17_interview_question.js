class Lizard {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }
  constructor({ newColor = "orange" } = {}) {
    this.newColor = newColor;
  }
}

const tommy = new Lizard({ newColor: "orange" });

// it will output a TypeError because static methods are not available on the instance of a class instead they are only available on the class directly like this
console.log(Lizard.colorChange("blue"));
console.log(tommy.colorChange("blue"));
