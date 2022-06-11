import '../assets/css/ShowList.css'
function ShowList(props) {
  const { id, name, age, handlerDelete } = props
  return (
    <div className="wrap">
      <div>id: {id}</div>
      <div>name: {name}</div>
      <div>age: {age}</div>
      <button onClick={() => handlerDelete(id)}>删除列表</button>
    </div>
  )
}

export default ShowList
