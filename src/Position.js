export default class Position {
  constructor() {
    this.isOccupied = false;
  }

  getIsOccupied = () => this.isOccupied;

  setIsOccupied = () => (this.isOccupied = !this.isOccupied);
}
