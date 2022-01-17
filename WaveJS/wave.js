import { Point } from './point.js';

export class Wave {
  constructor(index, totalPoints, color) {
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init() {
    this.points = [];
    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(this.index + i, this.pointGap * i, this.centerY);
      this.points[i] = point;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let preX = this.points[0].x;
    let preY = this.points[0].y;

    ctx.moveTo(preX, preY);

    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) {
        this.points[i].update();
      }

      const cx = (preX + this.points[i].x) / 2;
      const cy = (preY + this.points[i].y) / 2;

      ctx.lineTo(preX, preY);
      ctx.lineTo(this.stageWidth, this.stageHeight);
      ctx.lineTo(this.points[0].x, this.stageHeight);
      ctx.fill();
      ctx.closePath();
    }
  }
}
