import { ShoppingBag } from 'lucide-react';
import React from 'react'

const Cart = () => {
  return (
    <div className="px-20 mx-16 my-16 pt-32 lg:px-32">
        <div className="text-2xl font-bold text-black ">
            Shopping Cart
        </div>
        <div className="mt-8 gap-16">
            <div className="flex flex-col justify-center items-center">
            <ShoppingBag className="w-40 h-40 text-black"/>
            <h1 className="text-3xl text-bold text-black">Your shopping bag is empty</h1>
            </div>
        </div>
    </div>
  )
}

export default Cart;