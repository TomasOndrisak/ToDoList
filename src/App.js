import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ToDo from "./components/ToDo";

function App() {
  const [toDoText, setText] = useState("");
  const [toDoList, addItem] = useState([]);
  const [todosCount, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  function handleIsDisabled(event) {
    if (event.target.value === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }

  function countActualTodos() {
    const listLenght = toDoList.length;
    setCount(listLenght);
  }

  function onTextChange(event) {
    const { value } = event.target;
    handleIsDisabled(event);
    setText(value);
  }

  function pushToArray(event) {
    const newTask = { id: Math.floor(Math.random() * 1000), text: toDoText };

    addItem((previousArr) => {
      return [...previousArr, newTask];
    });

    countActualTodos();
    setText("");
    setIsDisabled(event);

  }

  function deleteItem(id) {
    addItem(toDoList.filter((item) => item.id !== id));
    console.log(toDoList);
    countActualTodos();
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
          <p onChange={countActualTodos}>
            {todosCount > 0 ? <span>Todos done: 0/{todosCount}</span> : null}
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
          className={isDisabled ? "add-button-empty" : "add-button"}
          onClick={isDisabled ? null : pushToArray}
        >
          <span>Add</span>
        </button>
      </header>
    </div>
  );
}

export default App;
