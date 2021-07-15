import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
const Todo = ({ todo }) => {
  return (
    <div className={todo.style ? todo.style + " " + "todo" : "todo"}>
      {todo && (
        <>
          <h3>
            <span> {todo.val}</span>
          </h3>
          <h2>{todo.todo}</h2>
          <h4>till: {todo.deadLine}</h4>
        </>
      )}
    </div>
  );
};

export default Todo;
