import { useState } from 'react'

import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir à academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
        {toDos.map((toDo) => (
            <Todo toDo={toDo}/>
        ))}
    </div>
    <TodoForm />
  </div>
}

export default App
