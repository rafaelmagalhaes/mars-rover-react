const COMPASS_POINT = {
  EAST: "E",
  NORTH: "N",
  SOUTH: "S",
  WEST: "W",
};
export const INSTRUCTION = {
  LEFT: "L",
  MOVE: "M",
  RIGHT: "R",
};
export class MarsRover {
  constructor(location, direction) {
    this.x = location[0];
    this.y = location[1];
    this.direction = direction;
    this.error = "";
  }
  setDirection(instruction) {
    const { direction } = this;
    if (direction === COMPASS_POINT.NORTH) {
      this.direction =
        instruction === INSTRUCTION.LEFT
          ? COMPASS_POINT.WEST
          : COMPASS_POINT.EAST;
    } else if (direction === COMPASS_POINT.SOUTH) {
      this.direction =
        instruction === INSTRUCTION.LEFT
          ? COMPASS_POINT.EAST
          : COMPASS_POINT.WEST;
    } else if (direction === COMPASS_POINT.WEST) {
      this.direction =
        instruction === INSTRUCTION.LEFT
          ? COMPASS_POINT.SOUTH
          : COMPASS_POINT.NORTH;
    } else if (direction === COMPASS_POINT.EAST) {
      this.direction =
        instruction === INSTRUCTION.LEFT
          ? COMPASS_POINT.NORTH
          : COMPASS_POINT.SOUTH;
    }
  }
  move() {
    const { direction } = this;
    const areaX = 5;
    const areaY = 5;
    const isRoverStillinYCoordinate = this.y >= 0 && this.y <= areaY;
    const isRoverStillinXCoordinate = this.x >= 0 && this.x <= areaX;
    if (direction === COMPASS_POINT.NORTH && isRoverStillinYCoordinate) {
      this.y++;
    } else if (direction === COMPASS_POINT.SOUTH && isRoverStillinYCoordinate) {
      this.y--;
    } else if (direction === COMPASS_POINT.WEST && isRoverStillinXCoordinate) {
      this.x--;
    } else if (direction === COMPASS_POINT.EAST && isRoverStillinXCoordinate) {
      this.x++;
    } else {
      this.error = "Movement is not possible";
      console.error("Movement is not possible");
    }
  }
  toString() {
    if (!this.error) {
      return `${this.x} ${this.y} ${this.direction}`;
    }
  }
}
