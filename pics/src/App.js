import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';

export default function App() {

    const [images, setImages] = useState([]);

    const handleSubmit = async (searchValue) => {
        const results = await searchImages(searchValue);
        setImages(results);
    };


  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images} />
    </div>
  )
}
