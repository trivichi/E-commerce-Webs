import React from "react";
import ProductCard from "./Productcard.js";
import "./Slider.css";
import products  from "./Products.js";


const ProductSlider = ({addToCart}) => {
  const productsPerPage = 10;
  const [currentPage] = React.useState(0);

  return (
    <div className="product-slider-container">
        <h3 className="gotoallp">New Products</h3>
      <div className="product-slider">
        {products
          .slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage)
          .map((product, index) => (
            <ProductCard key={index} product={product} addToCart={addToCart}/>
          ))}
      </div>
    </div>
  );
};

export default ProductSlider;
