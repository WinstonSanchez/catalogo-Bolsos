import {CatalogueContext} from '../../context/CatalogueContext'
import CardProduct from '../../components/CardProduct/cardProduct';
import React from 'react'
import './home.css'

function Home() {
  const {productSearched} = React.useContext(CatalogueContext);

  return (
    <div>
      <h1>Home</h1>
      <div className='card-container'>
        {productSearched.map(item => (
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

export default Home
