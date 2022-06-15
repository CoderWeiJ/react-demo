import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Link, useParams, Outlet } from "react-router-dom"
import './App.css'
import { Button } from 'antd'
// 引入定义好的coutnerStore
import counterStore from './mobx/CounterStore.js'
// 引入更新视图的关键方法
import { observer } from 'mobx-react-lite'
function App() {
  return (
    <>
      <Button type='primary' onClick={counterStore.addCount}>{counterStore.count}</Button>
    </>
  )
}

// 使用observer方法包裹组件 使其响应式数据变化
export default observer(App)