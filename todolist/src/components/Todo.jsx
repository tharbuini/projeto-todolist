import React from 'react'

const Todo = ({ toDo }) => {
  return (
    <div className="todo">
        <div className="content">
            <p>{toDo.text}</p>
            <p className="category">({toDo.category})</p>
        </div>
        <div>
            <button className="complete">Completar</button>
            <button className="remove">X</button>
        </div>
    </div>
  )
}

export default Todo