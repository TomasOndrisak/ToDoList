import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ToDo from "./components/ToDo";

function App() {
  const [toDoText, setText] = useState("");
  const [toDoList, addItem] = useState([]);

  function onTextChange(event) {
    const { value } = event.target;
    setText(value);
  }

  function pushToArray(event) {
    const newTask = { id: Math.floor(Math.random() * 1000), text: toDoText };

    addItem((previousArr) => {
      return [...previousArr, newTask];
    });

    setText("");
  }

  function deleteItem(id) {
    addItem(toDoList.filter((item) => item.id !== id));
    console.log(toDoList);
  }

  function editItem(id, editedItem) {
    const editedItemList = toDoList.map((item) => {
      if (id === item.id) {
        return { ...item, text: editedItem };
      }
      return item;
    });
    addItem(editedItemList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="toDo-container">
          <p>
            {toDoList.length > 0 ?<span>Todos done: 0/{toDoList.length}</span> : null}
          </p>
          {toDoList.map((item) => {
            return (
              <ToDo
                key={item.id}
                id={item.id}
                text={item.text}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            );
          })}
          {toDoList.length === 0 ? <h1>Add something to do.</h1> : null}
          <input
            className="toDo-input"
            onChange={onTextChange}
            name="toDo"
            placeholder="Add new todo..."
            value={toDoText}
          />
        </div>
        <button
          className={toDoText.length > 0 ? "add-button" : "add-button-empty"}
          onClick={toDoText.length > 0 ? pushToArray : null}
        >
          <span>Add</span>
        </button>
      </header>
    </div>
  );
}

export default App;
