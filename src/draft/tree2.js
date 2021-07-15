import Node from "../classes/Node";
const RADIUS = 20;
const WIDTH = 1215;
class Tree {
  constructor() {
    this.root = null;
  }
  addValue = (value) => {
    if (this.root == null) {
      this.root = new Node(value, RADIUS);
      this.root.x = Math.floor(WIDTH / 2);
      this.root.y = 50;
    } else {
      this.root.addNode(new Node(value, RADIUS));
    }
  };
  traverse = () => {
    this.root.visit(this.root);
  };
  search = (val) => {
    let res = null;
    res = this.root.search(val);
    if (res) console.log(`${val}is found`);
    else console.log(`${val} is not found`);
  };
}
export default Tree;
