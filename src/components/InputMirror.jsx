import { useState } from "react"

const InputMirror = ({}) => {
    const [text, setText] = useState('');
    
    const updateText = (e)=>{
        setText(e.target.value);
    }
    
    return(
        <div>
            <h2>Type your text here:</h2>
            <input type="text" onChange={updateText}></input>
            <p>Live preview:</p>
            <p>{text}</p>
        </div>
    )
}

export default InputMirror;