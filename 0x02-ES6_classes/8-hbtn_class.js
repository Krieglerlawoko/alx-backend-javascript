export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Custom method to cast the class to a number
  valueOf() {
    return this._size;
  }

  // Custom method to cast the class to a string
  toString() {
    return this._location;
  }
}
