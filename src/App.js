import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ToDo from "./components/ToDo";

function App() {
  const [toDoText, setText] = useState("");
  const [toDoList, addItem] = useState([]);
  const [todosCount, setCount] = useState(0);

  function countActualTodos() {
    setCount(toDoList.length + 1);
    console.log(toDoList.length);
  }
  function onTextChange(event) {
    const { value } = event.target;

    setText(value);
  }

  function pushToArray() {
    const newTask = { id: Math.floor(Math.random() * 1000), text: toDoText };

    addItem((previousArr) => {
      return [...previousArr, newTask];
    });
    countActualTodos();
    console.log(toDoList);

    setText("");
  }

  function deleteTask(e) {
    addItem(toDoList.filter((item) => item.id !== e));
    console.log(toDoList);
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
                deleteTask={deleteTask}
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
        <button className="add-button" onClick={pushToArray}>
          <span>Add</span>
        </button>
      </header>
    </div>
  );
}

export default App;
