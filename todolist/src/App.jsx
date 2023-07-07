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
  ]);

  const addToDo = (text, category) => {
    const newToDos = [
      ...toDos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
      },
    ];

    setToDos(newToDos);
  };

  const removeToDo = (id) => {
    const newToDos = [...toDos];
    const filteredToDos = newToDos.filter(toDo => toDo.id !== id ? toDo : null);

    setToDos(filteredToDos);
  }

  const completeToDo = (id) => {
    const newToDos = [...toDos];
    newToDos.map((toDo) => toDo.id === id ? toDo.isCompleted = !toDo.isCompleted : toDo);

    setToDos(newToDos);
  }

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
        {toDos.map((toDo) => (
            <Todo key={toDo.id} toDo={toDo} removeToDo={removeToDo} completeToDo={completeToDo}/>
        ))}
    </div>
    <TodoForm addToDo={addToDo} />
  </div>
}

export default App;
