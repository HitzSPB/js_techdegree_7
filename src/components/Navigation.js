// Imports
import React from 'react';
import { NavLink } from 'react-router-dom'

// Code
const Navigation = (props) => {
    return (
        <nav className ="main-nav">
        <ul>
          <li><NavLink to='/cutecats' onClick={() => props.searchSubmit("cutecats")}>Cats</NavLink></li>
          <li><NavLink to='/clothing' onClick={() => props.searchSubmit("clothing")}>Clothing</NavLink></li>
          <li><NavLink to='/models' onClick={() => props.searchSubmit("models")}>Models</NavLink></li>
        </ul>
      </nav>
    )
  }
  
  export default Navigation