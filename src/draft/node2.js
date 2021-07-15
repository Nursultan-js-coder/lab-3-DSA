import { Drawer } from "@material-ui/core";
let marginX = 150;
let marginY = 50;
class Node {
  constructor(val, radius) {
    val = val;
    left = null;
    right = null;
    radius = radius;
  }
  addNode = (node) => {
    if (val > node.val) {
      if (left == null) {
        left = node;
        left.x = x - marginX;
        left.y = y + marginY;
        marginX -= 10;
        drawLine(x, y, left.x, left.y);
      } else {
        left.addNode(node);
      }
    } else if (val < node.val) {
      if (right == null) {
        right = node;
        right.x = x + marginX;
        right.y = y + marginY;
        drawLine(x, y, right.x, right.y);
        marginX -= 10;
      } else {
        right.addNode(node);
      }
    }
  };
  visit = (parent) => {
    if (left) {
      left.visit(this);
    }
    console.log(val);
    circleDraw(x, y, radius, 0);
    writeText(x, y, val.toString());
    // drawLine(parent.x + 2, parent.y + 2,   x,   y);
    if (right) {
      right.visit(this);
    }
  };

  search = (val) => {
    if (val == val) {
      return val;
    } else if (val > val && left) {
      return left.search(val);
    } else if (val < val && right) {
      return right.search(val);
    }
    //  else return false;
  };
}

export default Node;

function circleDraw(x, y, radius, node) {
  let canvas = document.getElementById("myCanvas");
  let c = canvas.getContext("2d");
  c.beginPath();
  c.fillStyle = "#f1f1f1";
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.fill();
  c.strokeStyle = "#444";
  c.lineWidth = 3;
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.stroke();
  c.closePath();
}

function drawLine(x, y, x2, y2) {
  let canvas = document.getElementById("myCanvas");
  let c = canvas.getContext("2d");
  c.strokeStyle = "#444";
  c.lineWidth = 3;
  c.beginPath();
  c.moveTo(x, y);
  c.lineTo(x2, y2);
  c.stroke();
  c.closePath();
}

function writeText(x, y, text) {
  let canvas = document.getElementById("myCanvas");
  let c = canvas.getContext("2d");
  c.beginPath();
  c.fillStyle = "black";
  c.font = "17px Arial";
  c.closePath();

  c.fillText(text, x - 10, y + 4);
}
