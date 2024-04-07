import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Trending from "./components/trending";
import Help from "./components/Help";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
            <Route path="/trending" element={<Trending />}/>
            <Route path="/help" element={<Help />}/>
        </Routes>
      </div>  
    
  );  
}

export default App;
