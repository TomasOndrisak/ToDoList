import React from "react";
import ToDo from "./ToDo";

function ToDoContainer(props) {

  return (
    <div className="toDo-container">
      <p>
        {props.toDoListLenght > 0 ? (
          <span>
            Todos done: 0/{props.toDoListLenght}
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
            // isDone={isDone}
          />
        );
      })}
      {props.toDoListLenght === 0 ? <h1>Add something to do.</h1> : null}
    </div>
  );
}
export default ToDoContainer;
