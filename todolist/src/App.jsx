import { useState } from 'react'

import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [toDos, setToDos] = useState([]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

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
    <Search search={search} setSearch={setSearch} />
    <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
    <div className="todo-list">
        {toDos
        .filter((toDo) => 
          filter === "All" 
            ? true 
            : filter === "Completed" 
            ? toDo.isCompleted 
            : !toDo.isCompleted
        )
        .filter((toDo) => toDo.text.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => 
          sort === "Asc" 
            ? a.text.localeCompare(b.text) 
            : b.text.localeCompare(a.text)
        )
        .map((toDo) => (
            <Todo key={toDo.id} toDo={toDo} removeToDo={removeToDo} completeToDo={completeToDo}/>
        ))}
    </div>
    <TodoForm addToDo={addToDo} />
  </div>
}

export default App;
