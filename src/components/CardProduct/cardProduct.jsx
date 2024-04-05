import React from 'react'
import { useNavigate } from 'react-router-dom';
import './cardProduct.css';

function CardProduct({title, category, image, description, price}) {
  const navigate = useNavigate();

  return (
    <div className='card-div'>
        <div className='card-content'>
          <div className='card-title'>
            <p>{title}</p>
            <div onClick={() => navigate(`/catalogo-Bolsos/${category}`)}>{category}</div>
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

export default CardProduct