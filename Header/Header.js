import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
export default function Header() {
  return (
    <div>
    
    <nav className="navbar  navbar-light  header">
      <span className="navbar-brand text-light mb-0 h1">JobHunt</span>
   
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Reg</Link>
          </li>
  
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>
           
          </li>
        </ul>
        
      
   
    </nav></div>
  )
}
