import React from 'react'

export const ToDo = ({todow,onDelete}) => {
  return (
    <div>
      <h3>{todow.title}</h3>
      <p>{todow.desc}</p>
      <button className='btn btn-sm btn-danger'onClick={()=>{onDelete(todow)}}>Delete</button>
      
    </div>
  )
}

