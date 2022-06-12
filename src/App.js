import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css'

function Home () {
  return (
    <div>这是Home组件</div>
  )
}
function About () {
  return (
    <div>这是About组件</div>
  )
}

function App () {
  return (
    <Router>
      <div className="nav">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </Router>
  )
}

export default App