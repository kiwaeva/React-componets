import Button from "./components/Button";
import {useState} from "react";
import avatarImg from './components/images/my-avatar.jpg';
import Avatar from "./components/Avatar";
import Badge from "./components/Badge";

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
      <Button text="Click me!" color="red" onClick={()=> alert ("Well done, your first alert button is working! Now let's create and test the Counter." )}></Button>
      </div> 
      <div className="Counter">
        <Button color="blue" onClick={increment}>Add +1</Button>
        <Button color="green" onClick={decrement}> Deduct -1</Button>
        <h1>{count}</h1>
      </div>
      <div className="Toggle">
        <Button text={showMessage ? "Hide Message" : "Show Message"} onClick={toggleMessage} color="black"></Button>
        {showMessage && (
        <p> 🎉 This is your first toggle message! Keep up the good work.</p>
        )}
      </div>
      <div className="Badge" style={{ display: "flex", gap: "10px"}}>
        <Badge label="New" color="green" icon="✅"/>
        <Badge label="5" color="orange" showIcon="true"/>
        <Badge label="Sale" color="red"/>
      </div>
      <div className="dismissable" style={{ display: "flex", gap: "10px"}}>
        <Badge label="Beta" color="purple" icon="🧪" dismissible />
        <Badge label="Error" color="red" icon="⚠️" dismissible />
      </div>
    </div>
  );
}

export default App;
