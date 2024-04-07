import React from 'react'
import {Routes, Route, Link, NavLink} from "react-router-dom";
import "../App.css"

const Navbar=()=>{
  return (    
            <div className="Navbar">
              <nav>
                {/* <Routes>
                  <Route to="./trending.js">Trending</Route>
                </Routes> */}
                  <div className='main'>
                      <Link to="/">main</Link>
                  </div>
                  <div className='trending'>
                      <Link to="/trending">trending</Link>
                  </div>
                  <div className='help'>
                  <Link to="/help">help</Link>
                  </div>
              </nav>
            </div>
  )

}

export default Navbar;
