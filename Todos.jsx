import { useCallback } from "react";
import { useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


const initialState = [
    {id: 1, text: "상태값", done:true},
    {id: 2, text: "투두리스트", done:false},
];

function Todos() {
    const [todos, setTodos] = useState(initialState);

    const nextId = useRef(3);

    const doneCount = todos.filter((todos) => todos.done).length

    const onCreate = useCallback(
    (text) => {
        setTodos((todos) => [...todos, {id : nextId.current,text, done : false}])
        nextId.current++;
    }, []
    )

    const onRemove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const onToggle = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, done : !todo.done} : todo))
    }

    return(
        <div>
            <TodoInput onCreate={onCreate} />
            <span>
                완료 : {doneCount}/{todos.length}
            </span>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </div>
    )
}

export default Todos;