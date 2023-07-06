import React from 'react'

const TodoForm = () => {
  return (
    <div className="todo-fom">
        <h2>Criar Tarefa:</h2>
        <form>
            <input type="text" placeholder="Digite o título"></input>
            <select>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm