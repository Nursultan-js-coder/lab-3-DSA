class Draw {
  constructor() {
    this.canvas = document.getElementById("myCanvas");
    this.c = this.canvas.getContext("2d");
  }
  Circle(x, y, radius) {
    this.c.beginPath();
    this.c.fillStyle = "#888";
    this.c.arc(x, y, radius, 0, Math.PI * 2, false);
    this.c.fill();
    this.c.strokeStyle = "#444";
    this.c.lineWidth = 3;
    this.c.arc(x, y, radius, 0, Math.PI * 2, false);
    this.c.stroke();
    this.c.closePath();
  }

  Line(x, y, x2, y2) {
    this.c.strokeStyle = "#444";
    this.c.lineWidth = 3;
    this.c.beginPath();
    this.c.moveTo(x, y);
    this.c.lineTo(x2, y2);
    this.c.stroke();
    this.c.closePath();
  }
  writeText(x, y, text) {
    this.c.beginPath();
    this.c.fillStyle = "black";
    this.c.font = "17px Arial";
    this.c.closePath();

    this.c.fillText(text, x - 10, y + 4);
  }
}

export default Draw;
