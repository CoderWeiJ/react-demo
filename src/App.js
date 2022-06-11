import React from "react"
import SonA from "./components/SonA.jsx"
import SonB from "./components/SonB.jsx"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: 'APP存放共享状态值'
    }
  }

  handleChange = (msg) => {
    this.setState({
      msg,
    })
  }

  render () {
    return (
      <>
        <SonA msg={this.state.msg} />
        <SonB handleChange={this.handleChange} />
      </>
    )
  }
}

export default App
