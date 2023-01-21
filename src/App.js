import React, { useState } from "react";
import InputArea from "./components/InputArea";
import ToDoContainer from "./components/ToDoContainer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [toDoList, addItem] = useState([]);

  function pushToArray(text) {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      done: false,
    };
    addItem((previousArr) => {
      return [...previousArr, newTask];
    });
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
        <ToDoContainer
          toDoListLenght={toDoList.length}
          toDoList={toDoList}
          deleteItem={deleteItem}
          editItem={editItem}
        />
        <InputArea addItem={pushToArray} />
      </header>
    </div>
  );
}

export default App;
