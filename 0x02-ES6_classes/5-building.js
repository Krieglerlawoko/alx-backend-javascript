export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error("Building is an abstract class and cannot be instantiated directly");
    }
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method to be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
