import React from 'react'
import './Navbar.css'


function Navbars() {
  return (
    <div>
      <div className="bg">
        <div className="container">
            <nav>
                <img src="./img/I_am__B_-removebg-preview (1).png" className="logo" alt="" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Services">Services</a></li>
                    <li><a href="/Portfolio">Portfolio</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </nav>
            <div className="data">
                <p>Fronted Devloper</p>
                <h1>Hi, I'm <br />
                 <span>Bhavna Meshram</span> <br />From Nagpur</h1>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Navbars;

