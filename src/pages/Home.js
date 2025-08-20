// src/pages/Home.js

import { useState } from "react";
import Avatar from "../components/Avatar";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Card from "../components/Card";
import cardsData from "../components/data/cardsData";
import DayNightToggle from "../components/DayNightToggle";
import DropdownMenu from "../components/DropdownMenu";
import LikeButton from "../components/LikeButton";
import InputMirror from "../components/InputMirror";
import ColorPicker from "../components/ColorPicker";
import avatarImg from "../components/images/my-avatar.jpeg";
import cardImg from "../components/images/morticia.jpg";

function Home() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage((prev) => !prev);
  };

  return (
    <div className="App">
      <nav className="top">
        <div><DropdownMenu /></div>
        <div className="day-night"><DayNightToggle /></div>
      </nav>

      <header id="my-avatar" className="avatar">
        <Avatar name="Evelina Karasjova" imageUrl={avatarImg} size="200" />
      </header>

      <section className="components">
        <h3>Components:</h3>
        <Button
          textColor="white"
          text="Click me!"
          color="red"
          onClick={() => alert("Well done, your first alert button is working! Now let's create and test the Counter.")}
        />

        <section className="counter">
          <Button textColor="white" color="blue" onClick={increment}>Add +1</Button>
          <Button textColor="white" color="green" onClick={decrement}>Deduct -1</Button>
          <h1>{count}</h1>
        </section>

        <section className="toggle">
          <Button text={showMessage ? "Hide Message" : "Show Message"} onClick={toggleMessage} />
          {showMessage && <p> 🎉 This is your first toggle message! Keep up the good work.</p>}
        </section>

        <section className="badge" style={{ display: "flex", gap: "10px" }}>
          <Badge label="New" color="green" icon="✅" />
          <Badge label="5" color="orange" showIcon="true" />
          <Badge label="Sale" color="red" />
        </section>

        <section className="dismissable" style={{ display: "flex", gap: "10px" }}>
          <Badge label="Beta" color="purple" icon="🧪" dismissible />
          <Badge label="Error" color="red" icon="⚠️" dismissible />
        </section>
      </section>

      <section className="card-box" id="cards">
        <Card image={cardImg} title='Morticia Addams' description="Elegant, eerie, and endlessly enchanting." size='50' />
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </section>

      <section className="like-button"><LikeButton /></section>
      <section><InputMirror /></section>
      <section><ColorPicker /></section>
    </div>
  );
}

export default Home;