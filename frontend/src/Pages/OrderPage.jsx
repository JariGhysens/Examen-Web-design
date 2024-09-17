import React from 'react'

const OrderPage = () => {

  const handleHome = () => {
    window.location.href = "/";
  }
  return (

    <div className='OrderPageDiv'>

      <div className='Bevestiging'>
      <h1 className='text-order'>U betaling is gelukt! </h1>
      <h1 className='text-order'>Veel plezier met de film! </h1>
      <button onClick={handleHome} >
      Klik hier om terug naar het hoofdscherm te gaan.
    </button>
    </div>
    </div>
  )
}

export default OrderPage