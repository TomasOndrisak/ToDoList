import React, { useState } from "react";

function InputArea(props) {

  const [toDoText, setText] = useState("");
  const toDoTextLenght = toDoText.trim().length;
  
  function handleChange(e) {
    const newValue = e.target.value;
    setText(newValue);
  }

  return (
    <div>
      <input
        className="toDo-input"
        onChange={handleChange}
        name="toDo"
        placeholder="Add new todo..."
        value={toDoText}
      />
      <button
        className={toDoTextLenght > 0 ? "add-button" : "add-button-empty"}
        onClick={
          toDoTextLenght > 0
            ? () => {
                props.addItem(toDoText);
                setText("");
              }
            : null
        }
      >
        Add
      </button>
    </div>
  );
}
export default InputArea;
