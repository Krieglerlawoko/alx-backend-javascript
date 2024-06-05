import Car from './10-car.js';

const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  get range() {
    return this[_range];
  }

  // Override the cloneCar method
  cloneCar() {
    // Create a new Car object with the same attributes
    return new Car(this.brand, this.motor, this.color);
  }
}
