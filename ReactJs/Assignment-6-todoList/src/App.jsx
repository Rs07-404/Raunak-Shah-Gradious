import { useState } from 'react'
import { TodoContextProvider } from './context/TodoListContext.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import Form from './components/Form/Form.jsx';
import './App.css'

function App() {
  return (
    <TodoContextProvider>
      <list>
        <h1>My Todo List</h1>
        <TodoList />
        <Form />
      </list>
    </TodoContextProvider>
  )
}

export default App
