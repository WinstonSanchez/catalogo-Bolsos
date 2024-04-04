import React from 'react'
import './cardProduct.css';

function cardProduct({title, category, image, description, price}) {
  return (
    <div className='card-div'>
        <div className='card-content'>
          <div className='card-title'>
            <p>{title}</p>
            <a href={`/${category}`}>{category}</a>
          </div>
          <div className='card-img'>
            <img src={image} alt={title} />
          </div>
          <div className='card-information'>
            <p>Description: <span>{description}</span></p>
          </div>  
        </div>
        <div className='card-price'>
          <p>Price: <span>${price}</span></p>
        </div>
    </div>
  )
}

export default cardProduct