import { ShopContext } from '../context/shopContext'
import { useContext } from 'react'
import Title from './title'
import ProductItem from './productItem'

export const BestSaller = () => {

    const { products } = useContext(ShopContext)

    const bestSallerProducts = products.filter((item) => item.bestseller).slice(0, 5)

  return (
      <div className='my-10'>
          <div className='text-center py-8 text-3xl'>
              <Title text1="BEST" text2="SALLER" />
              <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                  Discover our best saller collection of high-quality products, carefully selected to meet your needs and exceed your expectations.
              </p>
          </div>

          {/*products*/}

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
              {
                  bestSallerProducts.map((item, index) => (
                      <ProductItem  key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                  ))
              }
          </div>
    </div>
  )
}
