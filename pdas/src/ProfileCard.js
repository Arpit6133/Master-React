import React from 'react'

export default function ProfileCard({title, handle, image, description}) {
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-1by1'>
          <img src={image} alt='pda image' />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media-content'>
          <p className='title is-4'>Title is {title} </p>
          <p className='subtitle is-6'>Handle is {handle} </p>
        </div>
      </div>
      <div className='content'>
        {description}
      </div>
    </div>
  )
}
