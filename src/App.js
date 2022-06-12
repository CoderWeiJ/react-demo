import React, { useRef, useEffect } from 'react'
import { Button } from 'antd'
import './App.css'

function Hi () {
  return (
    <div>哈哈哈</div>
  )
}

function App () {
  const testRef = useRef(null) // 相当于绑定虚拟dom
  const hiRef = useRef(null)
  useEffect(() => {
    console.log('testRef: ', testRef)
    console.log('a: ', hiRef)
  })
  return (
    <>
      <Button ref={testRef} type='primary' >点击+1</Button>
      <Hi ref={hiRef} />
    </>
  )
}

export default App