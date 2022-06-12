import React from 'react'

// import ShowList from './components/ShowList.jsx'
// 2. 提供数据
class Test extends React.Component {
  componentDidMount () {
    console.log('Test组件挂载完成')
  }
  componentWillUnmount () {
    console.log('Test组件即将卸载')
  }
  render () {
    return (
      <div>Test组件</div>
    )
  }
}
class App extends React.Component {
  state = {
    flag: true
  }
  handleClick = () => {
    this.setState({
      flag: !this.state.flag
    })
  }

  componentDidMount () {
    console.log('App组件挂载完成')
  }
  componentDidUpdate () {
    console.log('APP组件更新完成')
  }
  render () {
    console.log('APP组件render执行')
    return (
      <>
        <br />
        <button onClick={this.handleClick}>隐藏/显示</button>
        {this.state.flag ? <Test /> : ''}
      </>
    )
  }
}

export default App