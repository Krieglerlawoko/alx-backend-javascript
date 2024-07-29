class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Create a new Car instance with the same attributes
    const carClone = new Car(this._brand, this._motor, this._color);
    return carClone;
  }
}
