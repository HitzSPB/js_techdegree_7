// Imports
import React, { Component, PureComponent } from 'react';

import { withRouter } from 'react-router-dom'
import NotFound from './NotFound'
import Picture from './Picture'
// Code 
class Gallery extends PureComponent {
render(){
  return (
<div class="photo-container">
        <h2>Results</h2>
        <ul>
        this.props.photos;.map(result => 
          <Picture url={`https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}_n.jpg`} />);
          {/* <Picture
          url={"https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"} /> */}
          <NotFound />
        </ul>
      </div>
  )}
}

export default Gallery