import React from 'react'
import { useStateValue } from '../../context/StateProvider';
import CheckoutProduct from './checkout-product/CheckoutProduct'
import './Checkout.css'
import Subtotal from './Subtotal/Subtotal'


function Checkout() {

    // eslint-disable-next-line no-unused-vars
    const [{basket},dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img 
                className='checkout__ad' 
                src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img22/Jupiter/Pc_Affordability-Stripe_1500x100.jpg'
                alt=''/>
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {
                        basket.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating = {item.rating}
                            />
                        ))

                    }
                </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout