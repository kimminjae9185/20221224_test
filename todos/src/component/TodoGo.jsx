import { useState, useRef, useCallback } from 'react'
import TodoHead from './TodoHead'
// import Todo from './Todo'
// import TodoStyle from './TodoStyle'
import TodoItem from './TodoItem'

function TodoGo() {
  // 전체 시작

  // 스타트 상태
  const [todo, setTodo] = useState([
    { id: 1, text: '1번 할일', date: '2002', done: true },
    { id: 2, text: '2번 할일', date: '2022', done: true },
  ])

  // id 값은 여기서 시작
  const nextId = useRef(4)

  // 재사용 안시켜주려고 텍스트값 받아와서
  const onCreate = useCallback((text) => {
    // 현재id, text, false
    setTodo((todo) => [...todo, { id: nextId.current, text, done: false }])

    // 숫자올려줫고
    nextId.current++
  }, [])

  // 삭제
  const onRemove = (id) => {
    // setTodo(todo.filter((_, id) => todo.id !== id))
    setTodo((todo) => todo.filter((todo) => todo.id !== id))
  }

  // 토글
  const onToggle = (id) => {
    setTodo((todo) =>
      todo.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    )
  }

  const doneCount = todo.filter((todo) => todo.done).length

  return (
    <div>
      <TodoHead onCreate={onCreate} />
      {/* <Todo /> */}
      {/* <TodoStyle todo={todo} onRemove={onRemove} /> */}
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
      <span>
        완료 : {doneCount}/{todo.length}
      </span>
    </div>
  )
}

export default TodoGo
