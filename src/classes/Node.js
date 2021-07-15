const _ = require("lodash");

class Node {
  constructor(x, y, val, todo, deadLine) {
    this.x = x;
    // this.xInit = x;
    // this.yInit = y;
    this.y = y;
    this.val = parseInt(val);
    this.DOMLeaf = this.createDOMLeaf();
    this.timeout = null;
    this.todo = todo;
    this.deadLine = deadLine;
  }
  cloneInstance() {
    var cloned = Object.assign(
      Object.create(Object.getPrototypeOf(this)),
      this
    );
    return cloned;
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
  move(child,parent) {
    child.DOMLeaf.style.top = parent.y + "px";
    child.DOMLeaf.style.left = parent.x + "px";
    parent.DOMLeaf.style.top = child.y + "px";
    parent.DOMLeaf.style.left = child.x + "px";
  }

  animate(child,parent) {
    clearTimeout(this.interval);
    this.timeout = setTimeout(() => {
      this.move(child,parent);
    }, 1000);
  }
}

export default Node;
