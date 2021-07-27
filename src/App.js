import React, { useState } from 'react';
import { getPhotosFromAPI } from './utils/api'
import ImageList from './components/ImageList'
import './App.css';

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [images, setImages] = useState([])

  const fetchFromAPI = async () => {
    const data = await getPhotosFromAPI(searchText)
    console.log(data)
    setImages(data.results)
  }

  const handleChange = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <div className="App">
      <h1>Image Search Gallery</h1>
      
      <div>
        <input type="text" className="locationInput" id="locationInput" onChange={handleChange}></input>
        <button onClick={fetchFromAPI}>Search</button>
        <ImageList images={images}/>
      </div>
    </div>
  );
}

export default App;
