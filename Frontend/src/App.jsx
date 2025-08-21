import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Authentication/Login"
import Register from "./Authentication/Register"
import Todo from "./components/Todo"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
