import Button from "./components/Button";
import {useState} from "react";
import avatarImg from './components/images/my-avatar.jpg';
import Avatar from "./components/Avatar";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount (count + 1);
  const decrement = () => setCount (count -1);
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage((prev) => !prev)
  };

  return (

    <div className="App">
      <div className="Avatar">
        <Avatar name="Evelina Karasjova" imageUrl={avatarImg} size="100"/>
      </div>
  {/* If your component uses {children} → use nested content: <Button>Click me!</Button>
      If your component uses {text} → use props: <Button text="Click me!" /> */}
      <div className="Alert">
      <Button text="Click me!" color="red" onClick={()=> alert ("Well document, your first alert button is working! Now let's see what the blue button does." )}></Button>
      </div> 
      <div className="Counter">
        <Button color="blue" onClick={increment}>Add +1</Button>
        <Button color="green" onClick={decrement}> Deduct -1</Button>
        <h1>{count}</h1>
      </div>
      <div className="Toggle">
        <Button text={showMessage ? "Hide Message" : "Show Message"} onClick={toggleMessage} color="black"></Button>
        {showMessage && (
        <p> 🎉 Hello, this is your first toggle message!</p>
        )}
      </div>
    </div>
  );
}

export default App;
