import { useState, useEffect } from 'react'

export default function useLocalStorage (key, defaultVal) {
  const [msg, setMsg] = useState(defaultVal)

  useEffect(() => {
    localStorage.setItem(key, msg)
  }, [msg, key])

  return [msg, setMsg]
}