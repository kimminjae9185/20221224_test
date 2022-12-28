function TodoList({todos, onRemove, onToggle}) {

    return(
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
                ))}
        </ul>
    )
}

function TodoItem({todo, onRemove, onToggle}) {
    const {text, id, done} = todo;

    const handleRemove = () => {
        if(window.confirm("삭제")) onRemove(id);
    }

    const handleToggle = () => {
        onToggle(id);
    }

    
    return (<li>
        <span onClick={handleToggle} style={{textDecoration : done && "line-through" }}>{text}</span>
        <button onClick={handleRemove}>삭제</button>
    </li>
    )
}

export default TodoList;