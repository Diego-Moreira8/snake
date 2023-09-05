export default class Snake {
  constructor(length = 3, currentDirection = "right") {
    this.length = length;
    this.currentDirection = currentDirection;
    this.body = this.generateBody();
  }

  getLength = () => this.length;

  getCurrentDirection = () => this.currentDirection;

  getBody = () => this.body;

  generateBody() {
    const body = [];
    for (let i = 0; i < this.length; i++) body.push({ x: 0, y: 0 });
    return body;
  }

  positionSnake(x, y) {
    for (let i = 0; i < this.length; i++) {
      this.body[i].x = x++;
      this.body[i].y = y;
    }
  }

  walk() {
    // TO-DO
  }
}

const test = new Snake();

console.log(test.getBody());
