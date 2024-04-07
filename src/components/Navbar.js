import React from 'react'
import {Link} from "react-router-dom";

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
            <Link to="/cart">cart</Link>
        </div>
        <div>
          <Link to="/help">help</Link>
        </div>
    </nav>
  </div>
  )
}

export default Navbar
