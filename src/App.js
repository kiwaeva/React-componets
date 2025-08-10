import './App.css';
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
  {/* If your component uses {children} → use nested content: <Button>Click me!</Button>
      If your component uses {text} → use props: <Button text="Click me!" /> */}
      <Button text="Click me!" color="red"></Button>
      <Button color="blue">Click me!</Button>
    </div>
  );
}

export default App;
