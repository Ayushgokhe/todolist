
import React, { useState } from "react";
import './App.css';
import ToDoList from "./ToDoList";


const App = () => {

  const [inputList, setInputList] = useState("")
  const [item, setItem] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value)
  };

  const listOfItem = () => {
    setItem((oldItem) => {
      return [...oldItem, inputList]
    })
    setInputList('')
    
  };

  const deleteItem = (id) => {
    setItem((oldItem) => {
      return oldItem.filter((arrayVal, index) => {
        return index !== id;
      })
    })
    
  }

  return (
    <>
      <div className="main_container">
        <div className="content">
          <h1>To Do</h1>
          <input type="text" placeholder="Add Items" onChange={itemEvent} value={inputList}></input>
          <button className="plus_btn" onClick={listOfItem}>+</button>
          <ol>
            {
              item.map((itemVal, index) => {
                return <ToDoList
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItem}
                />
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;

