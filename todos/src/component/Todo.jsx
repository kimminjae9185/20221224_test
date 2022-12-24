import { useState, useRef, useMemo } from 'react'
import styled from 'styled-components'

function countUndoneTodo(todoPP) {
  return todoPP.filter((todo) => !todo.done).length
}

function Todo() {
  const [todo, setTodo] = useState([
    { id: 1, text: '1번 할일', date: '2002', done: true },
  ])

  const undoneTodoCount = useMemo(() => countUndoneTodo(todo), [todo])
  console.log(undoneTodoCount)

  const [input, setInput] = useState('')
  console.log(input)

  const nextId = useRef(4)

  const doneCount = todo.filter((todo) => todo.done).length

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setTodo(
      todo.concat({
        ...input,
        id: nextId.current,
        done: false,
      }),
    )
    inputRef.current.focus()
    setInput('')
  }

  const inputRef = useRef()

  const onRemove = (index) => {
    setTodo(todo.filter((_, idx) => idx !== index))
  }

  const onToggle = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    )
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        value={input.text}
        name="text"
        ref={inputRef}
      />
      <input
        type="text"
        name="date"
        value={input.date}
        onChange={handleInput}
      />
      <button onClick={handleSubmit}>등록</button>
      <ul>
        {todo.map((todo, idx) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done && 'line-through' }}
            onClick={() => onToggle(todo.id)}
          >
            {todo.text}( {todo.date})
            <button
              onClick={(e) => {
                e.stopPropagation()
                onRemove(todo.id)
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
      <span>
        완료 : {doneCount}/{todo.length}
      </span>
    </div>
  )
}

export default Todo
