import React from 'react';
import Header from './header.js';
import Footer from './Footer.js';
import products from './Products.js'; 
function Spage() {
 
  const product = products[8]; 

  return (
    <div>
      <Header />
      <div className="product-container">
        <img src={product.image} alt={product.name} />
        <div className="product-details">
          <h2>{product.name}</h2>
          <p>Variety: {product.variety}</p>
          <p>Company: {product.company}</p>
          <p>Price: ${product.price}</p>
          <p>Expiry Date: {product.expiryDate}</p>
          <p>Packing Size: {product.packingSize}</p>
          <p>Description: {product.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Spage;
