// Imports
import './css/index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import React, { Component } from 'react'
import apiKey from './Config';
import Search from './components/Search';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import NoPageFound from './components/NoPageFound';

class App extends Component{
state = {
  photos: [],
  fetchingResult: true
}

// Search call 
// Using https://www.flickr.com/services/api/explore/flickr.photos.search
Search = (text) =>{ 
  this.setState({fetchingResult: true})
  axios.get(`http://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&format=json&per_page=24&nojsoncallback=1`)
.then(response => {
  this.setState({ 
    photos: response.data.photos.photo,
    fetchingResult: false
  })
})
.catch(error => console.error("Fetching data resulted in an error", error))};

// Handling what to search for
SearchTextHandler = () => {
    // https://stackoverflow.com/questions/39823681/read-the-current-full-url-with-react
    if(window.location.pathname.includes('search')){
      this.Search(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1))
    } 
    else
    {
      this.Search(window.location.pathname.replace("/", ""))
    }
}


componentDidMount(){
  this.SearchTextHandler();
}
// Triggers a search even upon pressing the search button
SearchSubmit = () => {
  this.SearchTextHandler();
}
 render(){ 
   return (
  <BrowserRouter>
  <div className="container">
    <Search searchSubmit={this.SearchSubmit}/>
    <Navigation />
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/cutecats" />} />
      <Route path="/cutecats" render={() => <Gallery photos={this.state.photos} fetchingResult={this.state.fetchingResult}/>} />
      <Route path="/clothing" render={() => <Gallery photos={this.state.photos} fetchingResult={this.state.fetchingResult}/>} />
      <Route path="/models" render={() => <Gallery photos={this.state.photos} fetchingResult={this.state.fetchingResult}/>} />
      <Route exact path="/search/:text" render={() => <Gallery photos={this.state.photos} fetchingResult={this.state.fetchingResult}/>} />
      <Route component={NoPageFound} /> 
    </Switch>
  </div>
</BrowserRouter>);
}
}


export default App;
