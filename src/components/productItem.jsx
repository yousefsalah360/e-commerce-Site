import React from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'



const ProductItem = ({id, name, image, price}) => {

    const {Currency} = useContext(ShopContext)

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
          <div className='overflow-hidden'>
              <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
          </div>
          <p className='pt-3 pb-1 text-sm'>{name}</p>
          <p className='text-sm font-medium'>{Currency}{price}</p>
    </Link>
  )
}

export default ProductItem