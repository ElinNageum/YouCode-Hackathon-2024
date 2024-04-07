import React from 'react'
import {Routes, Route, Link, NavLink} from "react-router-dom";
import Trending from './Trending';

const Navbar = () => {
  return (
    <div className="Navbar">
    <nav>
        <div >
            <Link to="/">main</Link>
        </div>  
        <div>
            <Link to="/trending">trending</Link>
        </div>
        <div>
        <Link to="/help">help</Link>
        </div>
    </nav>
  </div>
  )
}

export default Navbar
