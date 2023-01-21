import React, { useState } from "react";
import "./ToDo.css";
function ToDo(props) {
  const [value, setValue] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [isClicked, setClicked] = useState("");

  function switchValue() {
    setValue((!value));
    // props.isDone(props.id, value)     
  }

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newName.length > 0) {
      props.editItem(props.id, newName);
      setNewName("");
      setEditing(false);
    } else {
      alert("The to-do text cannot be empty");
    }
  }

  const strikeThrough = { textDecoration: "line-through" };

  return (
    <div>
      <hr />
      {isEditing ? null : (
        <input
          className="to-do-checkbox"
          onChange={switchValue}
          type="checkbox"
        />
      )}
      {isEditing ? (
        <div>
          <input
            id={props.id}
            className="editing-input"
            type="text"
            value={newName}
            placeholder={props.text}
            onChange={handleChange}
          />
        </div>
      ) : (
        <p
          className={isClicked ? "to-do-text-clicked" : "to-do-text"}
          onClick={() => setClicked(!isClicked)}
          style={value ? strikeThrough : null}
        >
          {props.text}
        </p>
      )}
      <hr />
      {isEditing ? (
        <div>
          <button onClick={() => setEditing(false)} className="cancel-button">
            Cancel
          </button>
          <button onClick={handleSubmit} className="save-button">
            Save
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => props.deleteItem(props.id)}
            className="delete-button"
          >
            Delete
          </button>
          <button onClick={() => setEditing(true)} className="edit-button">
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default ToDo;
