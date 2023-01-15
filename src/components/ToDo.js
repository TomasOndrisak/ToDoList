import React, { useState } from "react";
import "./ToDo.css";
function ToDo(props) {
  let [value, setValue] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function switchValue() {
    setValue((value = !value));
  }

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editItem(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const strikeThrough = { textDecoration: "line-through" };
 
  return (
    <div>
      <hr />
        <input
          className="to-do-checkbox"
          onChange={switchValue}
          type="checkbox"
        />
        {isEditing ? (
          <input
            id={props.id}
            className="editing-input"
            type="text"
            value={newName}
            placeholder={props.text}
            onChange={handleChange}
          />
        ) : (
          <p className="to-do-text" style={value ? strikeThrough : null}>
            {props.text}
          </p>
        )}
        
        {isEditing ? (
          <div>
            <button onClick={() => setEditing(false)}> CANCEL</button>
            <button onClick={handleSubmit}  className="btn btn__primary todo-edit">
              Save
            </button>
          </div>
        ) : <div><button onClick={() => props.deleteItem(props.id)}>DELETE</button>
        <button onClick={() => setEditing(true)}>EDIT</button></div>}
      <hr />
    </div>
  );
}

export default ToDo;
