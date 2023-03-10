import React from 'react'
import './CartWidget.css'
import CartImage from './cart.png'

const CartWidget = () => {
  return (
    <div className="cart">
        <img src={CartImage} alt="logo" />
        <span className="cantidad">0</span>
    </div>
  )
}

export default CartWidget