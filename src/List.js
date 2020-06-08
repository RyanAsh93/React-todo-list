import React from "react";
import Todo from "./Todo"

const List = (props) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      {props.items.map((i) => (
        <Todo key={i.id} name={i.name} id={i.id} complete={i.complete}
        todoClick1={props.todoClick} 
        />
      ))}
    </ul>
  </div>
);

export default List;
