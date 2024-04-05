import CardProduct from '../../components/CardProduct/cardProduct'
import { CatalogueContext } from '../../context/CatalogueContext';
import React from 'react'
import './woman.css'

function Woman() {
  const {productSearched} = React.useContext(CatalogueContext);

  return (
    <div>
      <h1>Woman</h1>
      <div className='card-container'>
        {productSearched.filter(item => item.category === "woman").map(item => (
          <CardProduct 
            key={item.title}
            title={item.title} 
            category={item.category} 
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Woman
