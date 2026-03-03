import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import UserForm from './component/userForm'
import Steve from './component/Steve'
import "./App.css"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserForm />}></Route>
      <Route path='/:username?/:password' element={<Steve />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
