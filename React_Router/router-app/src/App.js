import { Routes, Route} from "react-router-dom";
import './App.css';
import NotFound from "./Components/404found";
import Home from './Components/Home'
import About from './Components/About'
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about/:common" element={<About />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
