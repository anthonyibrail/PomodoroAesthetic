import React from 'react'
import "./styles/Navbar.css"

function Navbar() {
  return (
    <div>
        <nav className='Navbar'> 
            <ul className='elements'>
                <li>Profile</li>
                <li>About</li>
                <li>Home</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar