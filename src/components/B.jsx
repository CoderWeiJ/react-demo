import { Consumer } from 'react'

function B() {
  return (
    <Consumer>
      {(msg) => <div>{`我是B组件：我收到了来自App组件的值：${msg}`}</div>}
    </Consumer>
  )
}

export default B
