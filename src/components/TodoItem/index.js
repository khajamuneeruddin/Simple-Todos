import './index.css'

const TodoItem = props => {
  const {deleteFunction, id, title} = props
  const deleteFun = () => {
    deleteFunction(id)
  }
  return (
    <li className="itemDiv">
      <p>{title}</p>
      <button className="btn" onClick={deleteFun}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
