import React from "react";

const Todo = ({ name, complete, id, todoClick1 }) => (
  <li style={complete ? { ...styles.todo, ...styles.complete } : styles.todo}
  onClick = {() => todoClick1(id)}
  >
    {name}
  </li>
);

const styles = {
  todo: { cursor: "pointer" },
  complete: {
    color: "grey",
    textDecoration: "line-through",
  },
};

export default Todo;
