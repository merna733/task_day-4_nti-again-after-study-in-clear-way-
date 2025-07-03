// shapeClasses.js

export class Shape {
  constructor(name) {
    this.name = name;
  }

  getArea() {
    throw new Error("getArea() must be implemented in subclass");
  }

  getPerimeter() {
    throw new Error("getPerimeter() must be implemented in subclass");
  }

  toString() {
    return `${this.name} → Area = ${this.getArea()}, Perimeter = ${this.getPerimeter()}`;
  }
}

export class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

export class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

export class Square extends Shape {
  constructor(name, side) {
    super(name);
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }

  getPerimeter() {
    return 4 * this.side;
  }
}
