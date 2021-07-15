import "./App.css";
import Node from "./classes/Node";
import Heap from "./classes/Heap";

// import Input from "@material-ui/core/Input";
// import Button from "@material-ui/core/Button";
const WIDTH = 1215;
const HEIGHT = 1000;
function App() {
  const update = (e) => {
    e.preventDefault();
    let heap = new Heap();
    heap.enQueue(14);
    heap.enQueue(13);
    heap.enQueue(12);
    heap.enQueue(11);
    heap.enQueue(10);

    console.log(heap.isHeap());
    heap.display();
  };
  return (
    <div className="App">
      <canvas
        id="myCanvas"
        width="1215"
        height="1000"
        style={{ border: "1px solid #d3d3d3" }}
      >
        Your browser does not support the HTML canvas tag.
      </canvas>
      <div className="form flex-centerify-to-top">
        <form className="flex-centerify">
          <input type="text" />
          <button>Enqueue</button>
        </form>
        <form className="flex-centerify">
          <button onClick={update}>Dequeue</button>
        </form>
      </div>
    </div>
  );
}
export default App;
