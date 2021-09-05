// Imports
import React from 'react';
import { NavLink } from 'react-router-dom'

// Code
const Navigation = () => {
    return (
        <nav className="main-nav">
        <ul>
          <li><NavLink to='/cats'>Cats</NavLink></li>
          <li><NavLink to='/dogs'>Dogs</NavLink></li>
          <li><NavLink to='/rabbit'>Rabbits</NavLink></li>
        </ul >
      </nav >
    )
  }
  
  export default Navigation