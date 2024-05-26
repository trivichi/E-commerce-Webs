import React from 'react';
import './ProductPopup.css';

const ProductPopup = ({ product, onClose, addToCart }) => {
  return (
    <div className="product-popup-overlay">
      <div className="product-popup">
        <div className="product-popup-content">
          <button className="close-button" onClick={onClose}>
            <img src="./photos/icons8-close-window-100.png" alt="close" width="25%"/>
          </button>
          <div className="img-wrapper">
          <img src={product.image} alt={product.name} className="product-img" />
          </div>
          <div className="prd-content">
          <h2 className="prd-name">{product.name}</h2>
          <p className="prd-variety">{product.variety}</p>
          <p className="prd-company">{product.company}</p>
          <p className="prd-price">&#8377;{product.price}</p>
          <p className="prd-description">{product.description}</p>
          <p className="prd-info">
            Expiry Date: {product.expiryDate} | Packing Size: {product.packingSize}
          </p>
          <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;