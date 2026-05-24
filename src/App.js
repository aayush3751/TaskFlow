
import './App.css';
import Header from "./myComponents/Header";
import {ToDos} from "./myComponents/ToDos";
import React, { useState } from 'react';
import {Footer} from "./myComponents/footer";
import {AddTodo} from "./myComponents/AddTodo";
function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to buy vegetables"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to buy jeans"
    },
    {
      sno: 3,
      title: "Go to the gym",
      desc: "You need to work out"
    }
  ]);

  const onDelete = (todow) => {
    console.log("I am ondelete", todow);
    setTodos(todos.filter((e) =>{
      return e!==todow;
    }));
  }

  const addToDo = ({ title, desc }) => {
    const nextSno = todos.length + 1;
    const newTodo = {
      sno: nextSno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    console.log('Added todo:', newTodo);
  }
  return (
    <>
   <Header title="your title" searchbox={true}/>
      <AddTodo addToDo={addToDo} />
   <ToDos todos={todos} onDelete={onDelete}/>

   <Footer />
   </>
  );
}

export default App;

