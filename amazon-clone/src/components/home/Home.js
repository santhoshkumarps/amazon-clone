import React from 'react'
import Product from '../product/Product'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img src="https://m.media-amazon.com/images/I/71jOy6K6AaL._SX1536_.jpg" className='home__image' alt=''/>

            <div className="home__row">
                <Product/>
                <Product/>
            </div>
            <div className="home__row">
                <Product/>
                <Product/>
                <Product/>
            </div>
            <div className="home__row">
                <Product/>
            </div>
        </div>
    </div>
  )
}

export default Home