// Imports
import React from 'react';
import { NavLink } from 'react-router-dom'

// Code
const Navigation = () => {
    return (
        <nav class="main-nav">
        <ul>
          <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
        </ul>
      </nav>
    )
  }
  
  export default Navigation