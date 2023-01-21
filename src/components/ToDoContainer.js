import React from "react";
import ToDo from "./ToDo";
import "./ToDoContainer.css";
function ToDoContainer(props) {


  return (
    <div className="toDo-container">
      <p>
        {props.toDoList.length > 0 ? (
          <span className="todos-count">
            Todos done: {props.todosDone}/{props.toDoList.length}
          </span>
        ) : null}
      </p>

      {props.toDoList.map((item) => {
        return (
          <ToDo
            key={item.id}
            id={item.id}
            text={item.text}
            deleteItem={props.deleteItem}
            editItem={props.editItem}
            isDone={props.isDone}
          />
        );
      })}
      {props.toDoList.length === 0 ? <h1>Add something to do.</h1> : null}
    </div>
  );
}
export default ToDoContainer;
