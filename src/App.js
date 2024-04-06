
import Navbar from "./Navbar";
import Filter from "./Filter";
import './App.css'
import image from './images/Mountains.png'



function App() {
  return (
    
    <div className= "App">
      
        <div className='Logo'>
          <img className='Skis' src={image} alt="logo" width/>
          <text>
            Fittouch
          </text>
    </div>
    <Navbar/>
    <Filter/>
    </div>
  );  
}

export default App;
