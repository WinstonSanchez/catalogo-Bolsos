import { ReactComponent as SearchIcon } from '../../assets/search/search.svg' 
import React, { useContext } from 'react'
import { CatalogueContext } from '../../context/CatalogueContext'
import './search.css'

function Search() {
  const {setTextSearch} = useContext(CatalogueContext)

  return (
    <div className='search-container'>
      <input type="text" placeholder='Buscar Producto' onChange={(event) => setTextSearch(event.target.value)} />
      <SearchIcon />
    </div>
  )
}

export default Search