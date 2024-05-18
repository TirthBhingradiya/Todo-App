import React, { useState } from "react";
import TodoInput from "./TodoInput";
import Todolist from "./TodoList";
import "./App.css";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} className="input-container" />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <Todolist key={i} item={listItem} deleteItem={deleteListItem} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
