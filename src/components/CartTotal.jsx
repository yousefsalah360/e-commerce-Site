import { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './title';

export const CartTotal = () => {
  const {getTotalCartAmount, Currency , DeliveryFee} = useContext(ShopContext);
  return (
      <div className='w-full'>
          <div className='text-2xl'>
              <Title text1="CART" text2="TOTAL" />
          </div>
          <div className='flex flex-col gap-2 mt-2 text-sm'>
              <div className='flex justify-between '>
                  <p>Subtotal</p>
                  <p>{Currency}{getTotalCartAmount()}.00</p>
              </div>
              <hr />
              <div className='flex justify-between '>
                  <p>Shipping Fee</p>
                  <p>{Currency}{DeliveryFee}.00</p>
              </div>
              <hr />
              <div className='flex justify-between '>
                  <p>Total</p>
                  <p>{Currency}{getTotalCartAmount() === 0?0:getTotalCartAmount() + DeliveryFee}.00</p>
              </div>
          </div>
    </div>
  )
}


export default CartTotal