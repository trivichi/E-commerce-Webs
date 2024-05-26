import React from 'react';
import './Productbox.css';
import ProductCard from './Productcard';
import products from './Products'; 

const Productbox = ({addToCart}) => {
  return (
    <div className="product-box">
        <center><h2>Today's Highlight</h2></center>
      <div className="row">
        {products.slice(0,1).map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart}/>
        ))}
      </div>
    </div>
  );
};

export default Productbox;
