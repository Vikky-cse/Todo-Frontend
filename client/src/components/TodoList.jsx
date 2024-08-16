import React from 'react'
import Header from './Header'
import TodoForm from './TodoForm'
import Todos from './Todos'
import './Todolist.css'
function TodoList() {
  return (
    <div className='app'>
      <Header />
        <TodoForm />
        <Todos />
    </div>
  )
}

export default TodoList
