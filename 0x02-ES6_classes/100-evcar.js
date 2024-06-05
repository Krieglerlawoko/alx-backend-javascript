import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    // Create a new Car instance with the same attributes
    const carClone = new Car();
    carClone._brand = this._brand;
    carClone._motor = this._motor;
    carClone._color = this._color;
    return carClone;
  }
}

export default EVCar;
