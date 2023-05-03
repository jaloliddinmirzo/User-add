import React from 'react'
import "./Navbar.css" 

function Navbar({users}) {
  return (
    <div className='navbar'>
        <div className="container navbar-container">
          <h1 className="navbar-logo">LOGO</h1>
          <h3 className="navbar-logo"> {users === 0 ? "No users :)" :  "You have: " + users } </h3>
        </div>
    </div>
  )
}

export default Navbar