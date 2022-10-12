import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal/Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img 
                className='checkout__ad' 
                src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img22/Jupiter/Pc_Affordability-Stripe_1500x100.jpg'
                alt=''/>
                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket

                        {/* Basket Item */}
                        {/* Basket Item */}
                        {/* Basket Item */}
                        {/* Basket Item */}
                        {/* Basket Item */}
                    </h2>
                </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout