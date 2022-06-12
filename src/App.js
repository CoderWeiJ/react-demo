// import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import './App.css'

import useLocalStorage from './hooks/useLocalStorage.js'

function App () {
  const [msg, setMsg] = useLocalStorage('my', 1)

  return (
    <>
      <Button type='primary' onClick={() => setMsg(msg + 1)}>点击+1</Button>
    </>
  )
}

export default App