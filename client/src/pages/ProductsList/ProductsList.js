import React from 'react'
import Sidebar from '../../components/Sidebar'
import Products from '../../components/Products'
import './ProductsList.css'

function ProductList() {
  return (
    <div className='productsList'>
      <div className='container'>
        <Sidebar>Sidebar</Sidebar>
        <Products>main right div</Products>
      </div>
    </div>
  )
}

export default ProductList
