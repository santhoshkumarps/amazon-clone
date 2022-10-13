import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../../context/reducer';
import { useStateValue } from '../../../context/StateProvider';
import './Subtotal.css'



function Subtotal() {
    // eslint-disable-next-line no-unused-vars
    const [{basket},dispatch] = useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal ({basket.length} items):
                        <strong> {value} </strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox"/> This order contains gift?
                    </small>  
                </>
            )}
            decimalScale={3}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
        />
        <button> Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal