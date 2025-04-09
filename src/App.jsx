import React from 'react'
import './App.css'
import MyNavbar from './components/MyNavbar'
import TodoApp from './components/TodoApp'
import TodoApp2 from './components/TodoApp2'

function App() {

  return (
    <div>
      <MyNavbar/>
      {/* <TodoApp/> */}
      <TodoApp2 />
    </div>
  )
}

export default App
