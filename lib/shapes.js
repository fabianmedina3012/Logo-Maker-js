// Define the Shape class
class Shape {
    constructor() {
      this.color = "";
    }
    // Method to set the color of the shape
    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  // Define the Triangle class that inherits from Shape
  class Triangle extends Shape {
    render() {
      // Return the SVG representation of a triangle with the specified color
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  // Define the Square class that inherits from Shape
  class Square extends Shape {
    render() {
      // Return the SVG representation of a square with the specified color
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  // Define the Circle class that inherits from Shape
  class Circle extends Shape {
    render() {
      // Return the SVG representation of a circle with the specified color
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  // Export the Triangle, Square, and Circle classes
  module.exports = { Triangle, Square, Circle };