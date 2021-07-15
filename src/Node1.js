const _ = require("lodash");

class Node {
  constructor(x, y, val, todo, deadLine) {
    this.left = 0;
    this.right = 0;
    this.x = x;
    this.xInit = x;
    this.yInit = y;
    this.y = y;
    this.val = parseInt(val);
    this.DOMLeaf = this.createDOMLeaf();
    this.interval = null;
    this.timeout = null;
    this.parent = null;
    this.marginX = 0;
    this.marginY = 0;
    this.todo = todo;
    this.deadLine = deadLine;
  }
  createDOMLeaf() {
    const canvas = document.querySelector(".canvas");
    const nodeDOM = document.createElement("div");
    nodeDOM.classList.add("balls");
    nodeDOM.style.top = this.y + "px";
    nodeDOM.style.left = this.x + "px";
    // if (this.val) nodeDOM.innerHTML = this.val;
    nodeDOM.innerHTML = this.val;
    canvas.appendChild(nodeDOM);
    return nodeDOM;
  }
  move(parent) {
    this.DOMLeaf.innerHTML = parent.val;
    this.DOMLeaf.top = parent.y;
    this.DOMLeaf.left = parent.x;

    parent.DOMLeaf.top = this.y;
    parent.DOMLeaf.left = this.x;
    parent.DOMLeaf.innerHTML = this.val;
    let tempX = this.x;
    let tempY = this.y;
    this.x = parent.x;
    this.y = parent.y;
    parent.x = tempX;
    parent.y = tempY;
  }

  animate(parent) {
    clearTimeout(this.interval);
    this.timeout = setTimeout(() => {
      this.move(parent);
    }, 1000);
  }
}

export default Node;
