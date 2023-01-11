import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ToDo from "./components/ToDo";

function App() {
  const [toDoText, setText] = useState("");
  const [toDoArray, addItem] = useState([]);
  const [todosCount, setCount] = useState(0);

  function countActualTodos(){
    setCount(toDoArray.length+1);
    console.log(toDoArray.length);
  }
  function onTextChange(event) {
    const { value } = event.target;

    setText(value);

  }

  function pushToArray() {
    addItem((previousArr) => {
      return ([...previousArr, toDoText]);
    });
    countActualTodos();

    setText("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="toDo-container">
        <p onChange={countActualTodos}>{todosCount > 0 ? <span>Todos done: 0/{todosCount}</span> : null}</p>
          {toDoArray.map((item, index) => {
            return (
                <ToDo key={index} text={item} />
            );
          })}
          {toDoArray.length === 0 ? <h1>Add something to do.</h1> : null}
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
