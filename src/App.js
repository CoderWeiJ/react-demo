import React from 'react'
import { observer } from 'mobx-react-lite'
// import { BrowserRouter as Router, Routes, Route, Link, useParams, Outlet } from "react-router-dom"
import './App.css'

import { useStore } from './store/index.js'




// 引入更新视图的关键方法
function App() {
  const {listStore, counterStore} = useStore()
  return (
    <>
    <button onClick={counterStore.addCount}>+1</button>
    <div>{counterStore.count}</div>
    </>
  )
}

// 使用observer方法包裹组件 使其响应式数据变化
export default observer(App)