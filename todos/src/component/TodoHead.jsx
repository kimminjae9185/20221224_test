import React, { useRef, useState } from 'react'

function TodoHead({ onCreate }) {
  // Head에서 인풋 상태 관리할꺼임.
  const [input, setInput] = useState('')
  console.log(input)

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const inputRef = useRef()

  const handleSubmit = () => {
    onCreate(input)
    inputRef.current.focus()
    setInput('')
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
      <button onClick={handleSubmit}>등록</button>
    </div>
  )
}

export default React.memo(TodoHead)
