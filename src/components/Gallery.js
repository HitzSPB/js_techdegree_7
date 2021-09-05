// Imports
import React from 'react';
import NotFound from './NotFound'
import Picture from './Picture'
// Code 
const Gallery = (props) => {
  return (
<div class="photo-container">
        <h2>Results</h2>
        <ul>
          <Picture />
          <NotFound />
        </ul>
      </div>
  )
}

export default Gallery