import React from 'react'
import {Routes, Route, Link, NavLink} from "react-router-dom";
import Trending from './Trending';

const Navbar = () => {
  return (
    <div className="Navbar">
    <nav>
        <div >
            <Link style={{color: "white"}} to="/">MAIN</Link>
        </div>  
        <div>
            <Link style={{color: "white"}} to="/trending">TRENDING</Link>
        </div>
        <div>
            <Link style={{color: "white"}} to="/trending">WISHLIST</Link>
        </div>
        <div>
        <Link style={{color: "white"}} to="/help">HELP</Link>
        </div>
    </nav>
  </div>
  )
}

export default Navbar

