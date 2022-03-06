import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home  from "./components/Home"
import About from "./components/About"
import Nomatch from "./components/Nomatch";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </div>
  );
}

export default App;
