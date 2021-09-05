// Imports
import './App.css';
import './css/index.css';
import { BrowserRouter, Route} from 'react-router-dom'
import axios from 'axios';
import React, { Component } from 'react'
import apiKey from './Config';
import Search from './components/Search';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';

class App extends Component{
state = {
  photos: [],
  fetchingResult: true
}

// Search call 
// Using https://www.flickr.com/services/api/explore/flickr.photos.search
Search = (text) =>{ 
  this.setState({fetchingResult: true})
  axios.get(`http://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&format=json&nojsoncallback=1`)
.then(response => {
  this.setState({ 
    photos: response.data.photos.photo,
    fetchingResult: false
  })
})
.catch(error => console.error("Fetching data resultet in an error", error))}

componentDidMount(){
  this.Search("cat");
}

 render(){ return (
    <div class="container">
      <Search />
      <Navigation />
      <Gallery
      photos={this.state.photos} 
      performSearch={this.Search}
      fetchingResult={this.state.fetchingResult}/>
      
    </div>
  );
}
}


export default App;
