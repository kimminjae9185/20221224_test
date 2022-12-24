import TodoItem from './TodoItem'

function TodoStyle({ todo, onRemove, onToggle }) {
  console.log(todo)

  return (
    <ul>
      {todo.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  )
}

export default TodoStyle
