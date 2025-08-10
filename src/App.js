import './App.css';
import Button from "./components/Button";
import {useState} from "react"

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount (count + 1)
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage((prev) => !prev)
  };

  return (
    <div className="App">
  {/* If your component uses {children} → use nested content: <Button>Click me!</Button>
      If your component uses {text} → use props: <Button text="Click me!" /> */}
      <Button text="Click me!" color="red" onClick={()=> alert ("Well document, your first alert button is working! Now let's see what the blue button does." )}></Button>
      <Button color="blue" onClick={increment}>Add 1</Button>
      <h1>{count}</h1>
      <Button text={showMessage ? "Hide Message" : "Show Message"} onClick={toggleMessage} color="black"></Button>
      {showMessage && (
        <p> 🎉 Hello, this is your first toggle message!</p>
      )}
    </div>
  );
}

export default App;
