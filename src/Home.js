import React from 'react'
import './Home.css';
import cashback from './images/cashback.jpg';
import kgr from './images/cashback2.jpg'
import Product from './Product'
function Home() {
    return (
        <div classname="home">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
               <div class="carousel-inner">
                 <div class="carousel-item active">
                   <img src={cashback} class="d-block w-100" alt="..." />
                 </div>
                   <div class="carousel-item">
                    <img src={kgr} class="d-block w-100" alt="..." />
                   </div>
                   
                </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{/* all the products details will come here */}
<div className="home__row">
          <Product
            id="12321341"
            title="Bright Red Kanjivaram Saree"
            price={11.96}
         
            image="https://cdn.shopify.com/s/files/1/1760/4649/products/KALANDISILK-197002_1_2048x2048.jpg?v=1632231568"
          />
          <Product
            id="49538094"
            title="Winterberry Purple Kanjivaram Saree"
            price={239.0}
           
            image="https://cdn.shopify.com/s/files/1/1760/4649/products/KALANDISILK-197004_1_2048x2048.jpg?v=1632231701"
          />

         <Product
            id="49538094"
            title="Dark Green Paithani Saree"
            price={239.0}
           
            image="https://cdn.shopify.com/s/files/1/1760/4649/products/MEERA3-15049_5_2048x2048.jpg?v=1632129472"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Burgundy Red Zari Work Kanjivaram Saree"
            price={199.99}
           
            image="https://cdn.shopify.com/s/files/1/1760/4649/products/KRGR-FB001-334-A_4_2048x2048.jpg?v=1615806155"
          />
          <Product
            id="23445930"
            title="Beautiful Peacock Blue Cotton Linen Saree"
            price={98.99}
           
            image="https://cdn.shopify.com/s/files/1/1760/4649/products/KRGR-KATARIYA-KONKONA-51971_2048x2048.jpg?v=1611783444"
          />
          <Product
            id="3254354345"
            title="Wine Purple Woven Kanjivaram Saree - Special Wedding Edition"
            price={598.99}
         
            image="https://cdn.shopify.com/s/files/1/1760/4649/products/KRGR-KATARIYA-KUMBHI-123002_3_2048x2048.jpg?v=1631951016"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="PARINEETI CHOPRA in Crimson Red Golden Paithani Saree"
            price={1094.98}
            
            image="https://cdn.shopify.com/s/files/1/1760/4649/products/parineetachopra_300x.jpg?v=1632827241"
          />
           <Product
            id="90829332"
            title="Beautiful Sarees, Amazing Prices !"
            price={1094.98}
            
            image="https://cdn.shopify.com/s/files/1/1760/4649/collections/Under_2999_360x.jpg?v=1633759240"
          />
           <Product
            id="90829332"
            title="White Gold Woven Kanjivaram Saree - Special Wedding Edition"
            price={1094.98}
            
            image="https://cdn.shopify.com/s/files/1/1760/4649/products/KRGR-SM001-123005_1_2048x2048.jpg?v=1613456912"
          />
          
        </div>
          

            
</div>
    )
}

export default Home
