import React, { useState, useEffect } from 'react';
import { getPhotosFromAPI } from './utils/api'
import './App.css';

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [photos, setPhotos] = useState([])

  const handleChange = (event) => {
    setSearchText(event.target.value)
  }

  const handleClick = async () => {
    const photosFromAPI = await getPhotosFromAPI
  }

  return (
    <div className="App">
      Image Search Gallery
      <input type="text" className="locationInput" id="locationInput" onChange={handleChange}></input>
      <button onClick={handleClick}>Get forecast</button>
    </div>
  );
}

export default App;
