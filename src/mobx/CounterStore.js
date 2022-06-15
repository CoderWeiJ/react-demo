import { makeAutoObservable, computed } from 'mobx'

class CounterStore {
  // 定义数据状态
  list = [1, 2, 3, 4, 5]
  count = 0
  constructor() {
    // 响应式处理
    makeAutoObservable(this, {
      filterList: computed // 在makeAutoObservable标记
    })
  }

  // 定义get计算属性(定义计算公式)
  get filterList() {
    return this.list.filter(item => item > 2)
  }

  // 修改源数据
  addList = () => {
    this.list.push(this.list.length+1)
  }
}

// 实例化
const counterStore = new CounterStore()

export default counterStore