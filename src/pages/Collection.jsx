import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

function Collection() {

  const { products } = useContext(ShopContext)

  const [filter, setFilter] = useState(false)

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*filter*/}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center gap-2 cursor-pointer'>FILTERS</p>
        {/*category filters*/}
        <div className={``}>
          
        </div>
      </div>

    </div>
  )
}

export default Collection