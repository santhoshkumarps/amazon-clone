import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../context/StateProvider'
import CheckoutProduct from '../checkout-product/CheckoutProduct';
import './payment.css'

function Payment() {

    const [{basket,user}, dispatch] = useStateValue();

  return (
    <div className="payment">
        <div className="payment__container">
            {/* payment section delivery address */}
            <h1>
                Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>


            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React lane</p>
                    <p>Los Angeles CA</p>
                </div>
            </div>
            {/* review items */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {
                        basket.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>
            {/* payment method */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>payment method</h3>
                </div>
                <div className="payment__detail">
                    {/* stripe magic will happen */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment