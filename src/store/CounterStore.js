
import { makeAutoObservable } from 'mobx'

class CounterStore {
  count = 0
  constructor() {
    makeAutoObservable(this)
  }

  addCount = () => {
    this.count++
  }
}

const countStore = new CounterStore()
export default countStore