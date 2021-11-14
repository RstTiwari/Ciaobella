import React from "react";
import "./Checkout.css";



function Checkout() {
 

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://cdn.shopify.com/s/files/1/1760/4649/files/Karagiri_Studio_-_28042020_300x300.jpg?v=1598289484"
          alt=""
        />

        <div>
          <p>Hello, </p>
          <p className="checkout__title">Your shopping Basket</p>

         

        </div>
      </div>

      <div className="checkout__right">
      
      </div>
    </div>
  );
}

export default Checkout;