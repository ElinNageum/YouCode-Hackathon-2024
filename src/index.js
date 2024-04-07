import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from './components/Trending';
import Help from './components/Help';
//import reportWebVitals from './reportWebVitals';

export default function MyApp() {
  return (

    <BrowserRouter>
    <Routes>
            <Route path="/app" element={<App />}/>
            <Route path="/trending" element={<Trending />}/>
            <Route path="/help" element={<Help />}/>
            <Route path="/" element={<App />}/>
        </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();