import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Company from "./components/Company";
import Favourite from "./components/Favourite";
import Narbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Narbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:company" element={<Company />} />
        <Route path="/favourites" element={<Favourite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
