import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FormPage from "./pages/FormPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter basename="/React-componets">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/formpage" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
