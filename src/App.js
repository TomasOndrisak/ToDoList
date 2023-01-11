import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ToDo from "./components/ToDo";

function App() {

  const [toDoText, setText] = useState('');
  const [toDoArray, addItem] = useState([]);
  let i = 0;

  function onTextChange(event){
    const {value} = event.target;
    setText(value);
  }

  function pushToArray(){
    addItem(previousArr => {
      return [...previousArr, toDoText];
    })
    setText('');

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="to-do-container">
        {toDoArray.map((item) => {
          return (<div><ToDo key={i++} text={item}/></div>)
        })}
        {toDoArray.length === 0 ? <h1>Add something to do.</h1> : null}
        </div>
       <input onChange={onTextChange} name='toDo' placeholder="add new todo" value={toDoText}></input>
        <button onClick={pushToArray}>Submit</button>

      </header>
    </div>
  );
}

export default App;
