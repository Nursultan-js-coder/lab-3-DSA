import "./App.css";
import Node from "./classes/Node";
import Heap from "./classes/Heap";
import React, { useState, useEffect } from "react";
import Todos from "./components/Todos";
import Form from "./components/Form";
const _ = require("lodash");
let todos = [];

let heap = new Heap();

function App() {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");

  const addTodo = () => {
    heap.enQueue(priority, todo, deadline);
    let cloneHeap = _.cloneDeep(heap);

    todos = cloneHeap.getSortedArr();
    todos[0].style = "first-todo";

    // console.log(heap, "heap");
    // console.log(cloneHeap, "cloneHeap");
    console.log(todos, "todos");
    setTodo("");
    setPriority("");
    setDeadline("");
  };
  const complete = () => {
    if(heap.data.length > 0&& todos.length > 0){
    heap.deQueue();
    let cloneHeap = _.cloneDeep(heap);
    cloneHeap = _.cloneDeep(heap);
    todos = cloneHeap.getSortedArr();
    todos[0].style = "first-todo";

    setTodo("");
    setPriority("");
    setDeadline(""); } };
  return (
    <div className="App">
      <h2 className="title">TODO APP (using priority queue)</h2>
      <div className="wrapper">
        {todos.length > 0 && <Todos todos={todos} />}
        <div className="canvas"></div>
      </div>
      <Form
        todo={todo}
        setTodo={setTodo}
        priority={priority}
        setPriority={setPriority}
        setDeadline={setDeadline}
        deadline={deadline}
        addTodo={addTodo}
        complete={complete}
      />
    </div>
  );
}
export default App;
