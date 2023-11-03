import React from 'react';
import ImageShow from './ImageShow';
import './ImageList.css';

export default function ImageList({ images }) {

const renderedImages = images.map((image) => {
    return (
        <div key={image.id}>
            <ImageShow src={image.urls.small} alt={image.alt_description}/>
        </div>
    );
})
  return (
    <div>
      ImageList : {images.length}
      <div className='image-list'>
        {renderedImages}
      </div>
      
    </div>
  )
}
