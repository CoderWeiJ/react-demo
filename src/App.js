import React from 'react'

import ShowList from './components/ShowList.jsx'
// 2. 提供数据
class App extends React.Component {
  state = {
    list: [
      { id: 1, name: '0魏健', age: 22 },
      { id: 2, name: '1魏健', age: 23 },
      { id: 3, name: '2魏健', age: 24 },
      { id: 4, name: '3魏健', age: 25 },
    ]
  }
  delHandler = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  render () {
    return (
      <>
        {
          this.state.list.map(item => <ShowList key={item.id} {...item} handlerDelete={this.delHandler} />)
        }
      </>
    )
  }
}

export default App