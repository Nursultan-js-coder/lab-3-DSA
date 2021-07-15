import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <div className="todos">
      {todos &&
        todos.map((todo) => {
          return <Todo todo={todo} />;
        })}
    </div>
  );
};

export default Todos;
