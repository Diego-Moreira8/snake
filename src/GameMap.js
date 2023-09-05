import Position from "./Position.js";

export default class GameMap {
  constructor(width = 10, height = 8) {
    this.width = width;
    this.height = height;

    // GAME MAP: Each element of the arrays's first dimension has a column
    this.gameMap = this.generateGameMap(this.width, this.height);
  }

  generateGameMap = (width, height) =>
    new Array(width).fill(new Array(height).fill(new Position()));

  getGameMap = () => this.gameMap;

  printMap() {
    for (let y = 0; y < this.height; y++) {
      let line = "";

      for (let x = 0; x < this.width; x++) {
        line += this.gameMap[x][y].getIsOccupied() ? "●" : "◌";
      }

      console.log(line);
    }
  }

  walkTo(x, y) {
    if (this.gameMap[x][y].getIsOccupied()) {
      this.gameMap[x][y].setIsOccupied();
    }
  }
}

// const test = new GameMap(6, 3);
// test.printMap();
