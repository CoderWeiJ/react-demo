import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams, Outlet } from "react-router-dom"
import './App.css'
import Login from './components/Login.jsx'
function Home () {
  return (
    <div>这是Home组件</div>
  )
}
function About () {
  // const [params] = useSearchParams()
  const params = useParams()
  console.log('params: ', params)
  return (
    <div>
      获取url参数：{params.id}, {params.name}
      {/* 二级路由出口 */}
      <Outlet />
    </div>
  )
}

function School() {
  return(
    <div>这里是学校组件</div>
  )
}

function Company() {
  return (
    <div>这里是Company组件</div>
  )
}

function App () {

  return (

    <Router>
      <div className="nav">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/about/company'>Company</Link>
      </div>

      <Login />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}>
          <Route index element={<School />}></Route>
          <Route path='company' element={<Company />} />
        </Route>
      </Routes>


    </Router>
  )
}

export default App