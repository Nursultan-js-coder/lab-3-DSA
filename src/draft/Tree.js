class Tree {
  constructor() {
    this.root = null;
  }
  addValue = (value) => {
    if (this.root == null) {
      this.root = new Node();
    }
  };
}
