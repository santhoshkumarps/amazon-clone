import React from 'react'
import './Product.css'

function Product({title,image,price,rating}) {
  
  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className='product__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                
                {Array(rating)
                  .fill()
                  .map((_, i)=>(
                  <p key={i.toString()}>⭐</p>
                ))}
            </div>
        </div>

        {/* end of product info-- beginning of product image */}

        <img src={image} alt={title}/>

        <button> Add to Basket </button>
    </div>
  )
}

export default Product