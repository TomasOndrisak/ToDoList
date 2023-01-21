import React, { useState } from "react";
import InputArea from "./components/InputArea";
import ToDoContainer from "./components/ToDoContainer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [toDoList, addItem] = useState([]);
  const todosDone = toDoList.filter((item) => item.done === true).length;

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

  function isDone(itemId, isChecked){
    const index = toDoList.map(item => item.id).indexOf(itemId);
    let update = [...toDoList];
    update[index].done = !isChecked;
    addItem(update);
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoContainer
          toDoList={toDoList}
          deleteItem={deleteItem}
          editItem={editItem}
          isDone={isDone}
          todosDone={todosDone}
        />
        <InputArea addItem={pushToArray} />
      </header>
    </div>
  );
}

export default App;
