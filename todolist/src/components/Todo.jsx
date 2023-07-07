import React from 'react'

const Todo = ({ toDo, removeToDo, completeToDo }) => {
  return (
    <div className="todo" style={{ textDecoration: toDo.isCompleted ? "line-through" : "" }}>
        <div className="content">
            <p>{toDo.text}</p>
            <p className="category">({toDo.category})</p>
        </div>
        <div>
            <button className="complete" onClick={() => completeToDo(toDo.id)}>Completar</button>
            <button className="remove" onClick={() => removeToDo(toDo.id)}>X</button>
        </div>
    </div>
  )
}

export default Todo