// Imports
import React, { PureComponent } from 'react';
import NotFound from './NotFound'
import Picture from './Picture'

// Code 
class Gallery extends PureComponent {
render(){
  const searchResults = this.props.photos;
  let result;
  if(!this.props.fetchingResult)
  {
    if(searchResults.length !== 0)
    {
      // Mapping the array to Picture class elements
      result = searchResults.map(result => <Picture url={`https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}_n.jpg`} alt={result.title} key={result.id} />)
    }
    else
    {
      result =  <NotFound />;
    }
}
else
{
  result = <h1>Loading result</h1>
}
  return (
<div className="photo-container">
        <h2>Results</h2>
        <ul>
        { result }
        </ul>
      </div>
  )}
}

export default Gallery