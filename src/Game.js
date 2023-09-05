import GameMap from "./GameMap.js";
import Snake from "./Snake.js";

export default class Game {
  constructor(mapWidth = 10, mapHeight = 8, snakeLength = 3) {
    this.gameMap = new GameMap(mapWidth, mapHeight);
    this.snake = new Snake(snakeLength);
  }
}
