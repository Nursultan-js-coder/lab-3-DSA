import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const Form = (props) => {
  const changeHandler = (e) => {
    props.setTodo(e.target.value);
  };
  const changeHandler2 = (e) => {
    props.setPriority(e.target.value);
  };
  const changeHandler3 = (e) => {
    props.setDeadline(e.target.value);
  };

  return (
    <>
      <div className="form">
        <form onSubmit={props.addTodo}>
          <input
            value={props.todo}
            onChange={changeHandler}
            placeholder="todo.."
          />
          <input
            value={props.priority}
            onChange={changeHandler2}
            placeholder="priority.."
          />
          <input
            value={props.deadline}
            onChange={changeHandler3}
            placeholder="deadline.."
          />

          <Button color="primary" variant="contained" onClick={props.addTodo}>
            Add Todo
          </Button>
          <Button variant="contained" color="primary" onClick={props.complete}>
            Complete
          </Button>
        </form>
      </div>
    </>
  );
};

export default Form;
