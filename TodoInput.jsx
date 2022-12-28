import React, { useRef, useState } from "react";

function TodoInput({onCreate}) {

    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const inputRef = useRef();

    const handleSubmit = () => {
        onCreate(input);
        inputRef.current.focus();
        setInput("");
    }

    return(
        <div>
            <input type="text" onChange={handleInput} value={input} ref={inputRef}/>
            <button onClick={handleSubmit}>등록</button>
        </div>
    )
}

export default React.memo(TodoInput);