import React from 'react'
import {SiAbbvie, SiAdidas, SiGnuicecat, SiNike, SiPuma ,SiReebok} from 'react-icons/si'
function Items() {
  return (
 <>
 <div className='parentbox'>
  <div className='card'>
    <h1><SiAdidas color={"white"} size = {"100"} /></h1>
    <div className='card-body'>
    <div className='card-title'>
      T-Shirts & Covers
    </div>
    <div className='card-content'>
    View our collection of footwear, apparel & more for Men, Women and Kids @ adidas Outlet. Up to 60% off: A collection where you are sure to find amazing articles! adidas® Official Shop. Shop Now! Free Shipping. Shop Footwear, Apparel. Accessories and more.
    </div>
  <button>Shop Now</button>
    </div>
    
  </div>
  <div className='card'>
  <h1><SiPuma color={"white"} size = {"100"} /></h1>
  <div className='card-body'>
    <div className='card-title'>
    Rough Laptop Cases
    </div>
    <div className='card-content'>
    View our collection of footwear, apparel & more for Men, Women and Kids @ puma Outlet. Up to 60% off: A collection where you are sure to find amazing articles! adidas® Official Shop. Shop Now! Free Shipping. Shop Footwear, Apparel. Accessories and more.
    </div>
  <button>Shop Now</button>
    </div>
    
    </div>
    <div className='card'>
    <h1><SiNike color={"white"} size = {"100"} /></h1>
    <div className='card-body'>
    <div className='card-title'>
      Geeky Shoes
    </div>
    <div className='card-content'>
    View our collection of footwear, apparel & more for Men, Women and Kids @ nike Outlet. Up to 60% off: A collection where you are sure to find amazing articles! adidas® Official Shop. Shop Now! Free Shipping. Shop Footwear, Apparel. Accessories and more.
    </div>
  <button>Shop Now</button>
    </div>
    
    </div>
 </div>

 </>
  )
}

export default Items