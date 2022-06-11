import { createContext } from 'react'
const { Consumer } = createContext()
import B from './B.jsx'

function A({ message }) {
  return (
    <>
      {<a>{message}</a>}
      <Consumer>
        {(msg) => <div>{'这里是A组件，我收到了来自父组件的值：' + msg}</div>}
        {/* <B /> */}
      </Consumer>
    </>
  )
}

export default A
