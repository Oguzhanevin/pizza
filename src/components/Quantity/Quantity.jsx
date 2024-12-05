import React from 'react'
import './Quantity.css'

function Quantity({ formData, setFormData }) {

  const handleQuantityChange = (amount) => {
    setFormData(prevData => ({
      ...prevData,
      quantity: prevData.quantity + amount
    }));
  }

  return (
    <div className='quantity-div'>
      <button
        className='left-button'
        type='button'
        onClick={() => handleQuantityChange(-1)}
        disabled={formData.quantity < 2}
      >
        -
      </button>
      <div className='current-quantity'>{formData.quantity}</div>
      <button
        className='right-button'
        type='button'
        onClick={() => handleQuantityChange(1)}
      >
        +
      </button>
    </div>
  )
}

export default Quantity;
