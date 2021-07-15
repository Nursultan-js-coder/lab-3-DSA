import Node from "./Node";
const _ = require("lodash");
let marginX = 300;
let marginY = 70;
const RADIUS = 20;
const WIDTH = 1000;
class Heap {
  constructor() {
    this.data = [];
    this.levels = [];
    this.level = 2;
    this.timeout = null;
  }

  getSortedArr() {
    let res = [];

    let length = this.data.length;
    for (let i = 0; i < length; i++) {
      res.push(this.deQueue());
    }
    return res;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.data.length;
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.data.length;
  }
  getRightChildIndex(index) {
    return (index + 1) * 2;
  }
  getLeftChildIndex(index) {
    return (index + 1) * 2 - 1;
  }
  getRightChild(index) {
    return this.data[this.getRightChildIndex(index)];
  }
  getLeftChild(index) {
    return this.data[this.getLeftChildIndex(index)];
  }
  isRoot(index) {
    return index === 0;
  }
  getParentIndex(index) {
    return Math.floor((index + 1) / 2 - 1);
  }
  getParent(index) {
    return this.data[this.getParentIndex(index)];
  }

  enQueue(val, todo, deadline) {
    if (Math.pow(2, this.level) - 1 === this.data.length) {
      if (this.level === 2) marginX -= 200;
      else marginX -= 60;
      this.level++;
      console.log(`margin is decreased current level :${this.level}`);
    }
    // let node = new Node(score);
    let node = null;
    if (this.data.length === 0) {
      let xOfNode = Math.floor(WIDTH / 2);
      let yOfNode = 50;
      node = new Node(xOfNode, yOfNode, val, todo, deadline);
    } else {
      let nodeIndex = this.data.length;
      let parentIndex = this.getParentIndex(nodeIndex);
      let parent = this.data[this.getParentIndex(nodeIndex)];
      // if ((parentIndex + 1) * 2 - 1 == nodeIndex) {
      if (this.getLeftChildIndex(parentIndex) === nodeIndex) {
        /// then it is left child
        let xOfNode = parent.x - marginX;
        let yOfNode = parent.y + marginY;
        node = new Node(xOfNode, yOfNode, val, todo, deadline);
      } else if (this.getRightChildIndex(parentIndex) === nodeIndex) {
        /// then it is right child
        let xOfNode = parent.x + marginX;
        let yOfNode = parent.y + marginY;
        node = new Node(xOfNode, yOfNode, val, todo, deadline);
      }
    }

    // this.draw.Circle(node.x, node.y, RADIUS);
    // this.draw.writeText(node.x - 3, node.y, node.score.toString());
    this.data.push(node);

    this.reCalculateUp();
  }

  deQueue() {
    if (this.data.length > 0) {
      let res = this.data[0];
      this.data[0] = this.data.pop();
      this.reCalculateDown();
      return res;
    } else {
      console.log("heap underflow");
    }
  }
  delay = (obj) => {
    obj.child.DOMLeaf.style.top = obj.parent.y + "px";
    obj.child.DOMLeaf.style.left = obj.parent.x + "px";
    obj.parent.DOMLeaf.style.top = obj.child.y + "px";
    obj.parent.DOMLeaf.style.left = obj.child.x + "px";
  };

  swap(index) {
    let temp = this.data[index].cloneInstance();

    this.data[index] = this.data[this.getParentIndex(index)];
    this.data[this.getParentIndex(index)] = temp;
    // this.data[index].animate(this.data[this.getParentIndex(index)]);
    let child = this.data[index];
    let parent = this.data[this.getParentIndex(index)];
    let obj = {
      child: child,
      parent: parent,
    };

    child.DOMLeaf.style.top = parent.y + "px";
    child.DOMLeaf.style.left = parent.x + "px";
    parent.DOMLeaf.style.top = child.y + "px";
    parent.DOMLeaf.style.left = child.x + "px";

    let tempX = this.data[index].x;
    let tempY = this.data[index].y;
    this.data[index].x = this.data[this.getParentIndex(index)].x;
    this.data[index].y = this.data[this.getParentIndex(index)].y;
    this.data[this.getParentIndex(index)].x = tempX;
    this.data[this.getParentIndex(index)].y = tempY;
    // /////////
    index = this.getParentIndex(index);
  }

  async reCalculateUp() {
    let index = this.data.length - 1;
    while (
      !this.isRoot(index) &&
      this.data[index].val > this.data[this.getParentIndex(index)].val
    ) {
      this.swap(index);
      index = this.getParentIndex(index);
      // index= await this.swapWrapper(index);
    }
  }

  peek() {
    return this.data[0];
  }
  reCalculateDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let biggerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.data[biggerChildIndex].val <
          this.data[this.getRightChildIndex(index)].val
      )
        biggerChildIndex = this.getRightChildIndex(index);
      if (this.data[biggerChildIndex].val < this.data[index].val) break;
      //   this.swap(this.data[index], this.data[biggerChildIndex]);
      let temp = this.data[index];
      this.data[index] = this.data[biggerChildIndex];
      this.data[biggerChildIndex] = temp;

      index = biggerChildIndex;
    }
  }

  display() {
    for (let i = 0; i < this.data.length; i++) {
      if (i % 10 === 0) console.log("\n");
      console.log(`${this.data[i].val}, index:${i} `);
    }
  }
  isHeap() {
    for (let i = 0; i < this.data.length; i++) {
      if (
        this.data[this.getLeftChildIndex(i)] > this.data[i] ||
        this.data[this.getRightChildIndex(i)] > this.data[i]
      ) {
        return false;
      }
      return true;
    }
  }
}
export default Heap;
