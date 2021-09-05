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
          <Picture
          url={"https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"} />
          <NotFound />
        </ul>
      </div>
  )
}

export default Gallery