import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import './App.css'
// hook
function Test () {
  const [count, setCount] = useState(0) // 声明hook
  const handleClick = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    // const timer = setInterval(() => {
    //   document.title = count
    //   console.log('我是定时器')
    // }, 1000)
    console.log('effect,')
  }, [count]) // 传空数组的依赖项时，就只会渲染的时候被调用，传值时，当值改变才会触发
  return (
    <>
      <p>{count}</p>
      <Button onClick={() => handleClick()}>点击+1</Button>
    </>
  )
}
function App () {
  const [flag, setFlag] = useState(true) // 声明hook

  return (
    <>
      <Button type='danger' onClick={() => setFlag(!flag)}>点击啊</Button>
      {
        flag ? <Test /> : ''
      }
    </>
  )
}

export default App