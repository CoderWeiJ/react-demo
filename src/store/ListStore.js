import { makeAutoObservable } from 'mobx'

class ListStore {
  list = [1, 2, 3, 4]
  constructor() {
    makeAutoObservable(this)
  }

  addList = () => {
    this.list.push(this.list.length + 1)
  }
}

const listStore = new ListStore()
export default listStore