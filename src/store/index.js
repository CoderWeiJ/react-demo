
import React from 'react'
import counterStore from './CounterStore.js'
import listStore from './ListStore.js'

class RootStore {
  // 组合store
  constructor() {
    this.counterStore = counterStore
    this.listStore = listStore
  }

}
// 实例化根store注入context
const rootStore = new RootStore()
const context = React.createContext(rootStore)

// 导出useStore方法，供组件通过调用该方法使用根实例
const useStore = () => React.useContext(context)

export { useStore }
