import React from 'react'
import { useState } from 'react'
export const AddTodo = (props) => {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const submit=(e)=>{
    e.preventDefault();//for prevent refresh

    props.addToDo({title,desc});
    setTitle("");
    setDesc("");
  }

  return (
    <div className="container my-3"> 
   <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="title"  value={title} onChange={(e)=>{setTitle(e.target.value)}}aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">enter your title for your to-do work</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
  </div>
  <button type="submit" className="btn btn-primary" >Add Todo</button>
</form>
</div>
  )
}