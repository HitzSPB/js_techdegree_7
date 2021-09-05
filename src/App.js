// Imports
import './App.css';
import './css/index.css';
import './Config'
import { BrowserRouter, Route} from 'react-router-dom'
import axios from 'axios';
import React, { Component } from 'react'
import apiKey from './Config';
import Search from './components/Search';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import { render } from '@testing-library/react';

class App extends Component{
state = {
  photos: []
}

// Search call 
// Using https://www.flickr.com/services/api/explore/flickr.photos.search
Search = text => axios.get(`www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=cat&format=json&nojsoncallback=1`)
.then(response => {
  this.SetState({ photos: response.data.photos.photos})
});

 render(){ return (
    <div class="container">
      <Search />
      <Navigation />
      <Gallery
      photos={this.state.photos} />
    </div>
  );
}
}


export default App;
