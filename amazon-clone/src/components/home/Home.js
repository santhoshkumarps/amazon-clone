import React from 'react'
import Product from '../product/Product'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img src="https://m.media-amazon.com/images/I/71jOy6K6AaL._SX1536_.jpg" className='home__image' alt=''/>

            <div className="home__row">
                <Product
                    id="1494379"
                    title="The Lean startup" 
                    price={299} 
                    rating={4} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    key="The Lean Startup"/>
                <Product 
                    id="7366829"
                    title="Vintage Gulley Brass Narayan Shankh | Conch Shell" 
                    price={2830}
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/81mVsFDow3L._SL1500_.jpg" 
                    key="Vintage Gulley Brass Narayan Shankh | Conch Shell"/>
            </div>
            <div className="home__row">
                <Product
                    id="87251726" 
                    title="Echo Show 5-2nd Gen-Black" 
                    price={3999} 
                    rating={4}
                    image="https://m.media-amazon.com/images/I/514kzV+UPOS._AC_UL480_QL65_.jpg" 
                    key="Echo Show 5-2nd Gen-Black"/>
                <Product
                    id="873489292" 
                    title="ES ESPINHO Maddison Solid Sal Wood Fabric 4 Seater Sectional, Corner, Modular L Shape Sofa (Right Hand Side Facing), Teal Color" 
                    price={35759} 
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/51cf92qyyAS.jpg" 
                    key="ES ESPINHO Maddison Solid Sal Wood Fabric 4 Seater Sectional, Corner, Modular L Shape Sofa (Right Hand Side Facing), Teal Color"/>
                <Product
                    id="56789387"
                    title="LG 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator (GL-D201ASCY, Scarlet Charm, Base stand with Drawer)" 
                    price={15990} 
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/61PIMcFCsAL._SL1500_.jpg" 
                    key="LG 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator (GL-D201ASCY, Scarlet Charm, Base stand with Drawer)"/>
            </div>
            <div className="home__row">
                <Product
                    id="543287654" 
                    title="OnePlus 10 Pro 5G (Emerald Forest, 12GB RAM, 256GB Storage) " 
                    price={66999} 
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/618hqM-yxtL._SL1500_.jpg" 
                    key="OnePlus 10 Pro 5G (Emerald Forest, 12GB RAM, 256GB Storage) "/>
            </div>
        </div>
    </div>
  )
}

export default Home