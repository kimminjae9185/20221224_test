function TodoItem({ todo, onRemove, onToggle }) {
  const { text, id, done } = todo

  // id를 찝은거를 삭제
  const handleRemove = (id) => {
    console.log(id)
    onRemove(id)
  }

  // id를 찝은거를 토글
  const handleToggle = (id) => {
    if (todo.done) {
      console.log(todo.done)
      todo.done == false
    } else {
      todo.done == true
    }
    onToggle(id)
  }

  return (
    <li>
      <span
        onClick={handleToggle}
        style={{ textDecoration: done && 'line-through' }}
      >
        {text}
      </span>
      <button
        onClick={handleRemove}
        style={{ textDecoration: todo.done && 'line-through' }}
      >
        삭제
      </button>
    </li>
  )
}

export default TodoItem
