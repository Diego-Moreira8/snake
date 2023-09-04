export default class Snake {
  constructor(length = 3, currentDirection = "right") {
    this.length = length;
    this.currentDirection = currentDirection;
    this.body = new Array(this.length).fill({ x, y });
  }

  getLength = () => this.length;

  getCurrentDirection = () => this.currentDirection;

  walk() {
    // TO-DO
  }
}
