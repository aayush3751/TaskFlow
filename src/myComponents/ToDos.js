import React from 'react'
import {ToDo} from "../myComponents/ToDo";
export const ToDos = (props) => {
  return (
    <div className="container">
      <h3 className=' my-3'>To-do Lists</h3>
      { props.todos.length===0?"no todos to display" :
      props.todos.map((todo) =>
      {
        return (
          <div key={todo.sno}>
            <h3>works</h3>
            <ToDo todow={todo}  onDelete={props.onDelete}/>
          </div>
        )
      })
      }
    </div>
  )
}

