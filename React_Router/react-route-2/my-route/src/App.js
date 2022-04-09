import './App.css';
import Showvalue from './Components/Showvalue';
import { Routes, Route} from "react-router-dom";
import Notfound from './Components/Notfound';
import DetailUser from './Components/DetailUser';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Showvalue />} />
        <Route path="posts/:postId" element={<DetailUser/>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}


export default App;
