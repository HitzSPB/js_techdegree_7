// Imports
import './App.css';
import './css/index.css';
import './Config'
import { BrowserRouter, Route} from 'react-router-dom'
import React from 'react'

import Search from './components/Search';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';

function App() {
  return (
    <div class="container">
      <Search />
      <Navigation />
      <Gallery />
    </div>
  );
}

export default App;
