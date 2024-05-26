import React, { useState } from 'react';
import './Productcard.css';
import ProductPopup from './ProductPopup';

const ProductCard = ({product, addToCart}) => {
  const { name, variety, company, price, image } = product;
  const [showPopup, setShowPopup] = useState(false);
  
  console.log("addToCart in productcard:", addToCart);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="product-card" onClick={togglePopup}>
        <div className="product-image-wrapper">
          <img src={image} alt={name} className="product-image" width="200px"/>
        </div>
        <div className="product-details">
          <h2 className="product-name">{name}</h2>
          <p className="product-variety">{variety}</p>
          <p className="product-company">{company}</p>
          <p className="product-price">&#8377;{price}</p>
          <button className="add-to-cart-button" onClick={handleAddToCart} onMouseUp={togglePopup}>
            Add to Cart
          </button>
        </div>
      </div>
      {showPopup && <ProductPopup product={product} onClose={togglePopup} addToCart={handleAddToCart} />}
    </>
  );
};

export default ProductCard;



