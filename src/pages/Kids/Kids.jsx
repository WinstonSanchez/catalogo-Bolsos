import CardProduct from '../../components/CardProduct/cardProduct'
import { CatalogueContext } from '../../context/CatalogueContext';
import React from 'react'
import './kids.css'

function Kids() {
  const {products} = React.useContext(CatalogueContext);

  return (
    <div>
      <h1>Kids</h1>
      <div className='card-container'>
        {products.filter(item => item.category === "kids").map(item => (
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

export default Kids
