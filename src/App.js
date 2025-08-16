import Button from "./components/Button";
import {useState} from "react";
import avatarImg from './components/images/my-avatar.jpeg';
import Avatar from "./components/Avatar";
import Badge from "./components/Badge";
import Card from "./components/Card";
import cardImg from './components/images/morticia.jpg';
import cardsData from './components/data/cardsData';
import DayNightToggle from './components/DayNightToggle';
import LikeButton from "./components/LikeButton";
import InputMirror from "./components/InputMirror";
import ColorPicker from "./components/ColorPicker";
import './index.css';

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
      <div className="day-night">
      <DayNightToggle />
      </div>
      <div className="avatar">
        <Avatar name="Evelina Karasjova" imageUrl={avatarImg} size="200"/>
      </div>
  {/* If your component uses {children} → use nested content: <Button>Click me!</Button>
      If your component uses {text} → use props: <Button text="Click me!" /> */}
      <div className="alert">
      <Button textColor="white" text="Click me!" color="red" onClick={()=> alert ("Well done, your first alert button is working! Now let's create and test the Counter." )}></Button>
      </div> 
      <div className="counter">
        <Button textColor="white" color="blue" onClick={increment}>Add +1</Button>
        <Button textColor="white" color="green" onClick={decrement}> Deduct -1</Button>
        <h1>{count}</h1>
      </div>
      <div className="toggle">
        <Button text={showMessage ? "Hide Message" : "Show Message"} onClick={toggleMessage}></Button>
        {showMessage && (
        <p> 🎉 This is your first toggle message! Keep up the good work.</p>
        )}
      </div>
      <div className="badge" style={{ display: "flex", gap: "10px"}}>
        <Badge label="New" color="green" icon="✅"/>
        <Badge label="5" color="orange" showIcon="true"/>
        <Badge label="Sale" color="red"/>
      </div>
      <div className="dismissable" style={{ display: "flex", gap: "10px"}}>
        <Badge label="Beta" color="purple" icon="🧪" dismissible />
        <Badge label="Error" color="red" icon="⚠️" dismissible />
      </div>
      <div className="card-box">
        <Card image={cardImg} title='Morticia Addams' description="Elegant, eerie, and endlessly enchanting." size='50'/>
        {/* If stored in data file in a big project then:  */}
        {cardsData.map((card, index) => (
        <Card
        key={index}
        title={card.title}
        image={card.image}
        description={card.description}
    />
  ))}
      </div> 
      <div className="like-button"><LikeButton/></div>
      <div> <InputMirror/> </div>

       <div>
      <ColorPicker/>
      </div>
    </div>
  );
}

export default App;
