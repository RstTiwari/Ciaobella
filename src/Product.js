import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
  
    const addToBasket = () => {
      // dispatch the item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };
  


  
    return (
    <div className="product">
      <div className="product__info">
        <h5><p className='product__title'>{title}</p></h5>
        
        
      </div>
      
       
      <img src={image} alt="" />
      
     
      <button onClick='addToBasket'><i class="fa fa-shopping-cart"></i></button>
  
      <p className="product__price">
          <small><p><b>Price &#x20b9; <strong>{price}</strong></b></p></small>
         
        </p>
    </div>
  );
}

export default Product;