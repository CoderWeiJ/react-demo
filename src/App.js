import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams, Outlet } from "react-router-dom"
import './App.css'
import Login from './components/Login.jsx'
function Home() {
  return (
    <div>这是Home组件</div>
  )
}
// 未找到匹配路由时，加载这个组件
function NotFound() {
  return (
    <div>这是NotFound组件</div>
  )
}
function About() {
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
  return (
    <div>这里是学校组件</div>
  )
}

function Company() {
  return (
    <div>这里是Company组件</div>
  )
}

function App() {

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
        {/* 404，当匹配不到相应路由时，加载最后一个，注意，需要写在所有路由的最后 */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>


    </Router>
  )
}

export default App