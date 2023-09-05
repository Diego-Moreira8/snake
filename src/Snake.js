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

  printSnake = () => console.table(this.body);

  positionSnake(x, y) {
    for (let bodyPiece of this.body) {
      bodyPiece.x = x++;
      bodyPiece.y = y;
    }
  }

  walk() {
    // Right
    for (let bodyPiece of this.body) {
      bodyPiece.x = bodyPiece.x + 1;
    }
  }
}

const test = new Snake();
test.printSnake();
test.positionSnake(0, 0);
test.printSnake();
test.walk();
test.printSnake();
test.walk();
test.printSnake();
test.walk();
test.printSnake();
