import React, { useState, useEffect } from 'react';
import ProductCard from './Productcard';
import './Ppage.css';

const Ppage = ({searchQuery, products, addToCart}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  console.log("addToCart in Ppage:", addToCart);


  useEffect(() => {
    const handleSearch = () => {
      let searchedProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.variety.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.company.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (selectedCompanies.length > 0) {
        searchedProducts = searchedProducts.filter((product) =>
          selectedCompanies.includes(product.company)
        );
      }

      if (selectedCategories.length > 0) {
        searchedProducts = searchedProducts.filter((product) =>
          selectedCategories.some((category) =>
            product.variety.toLowerCase().includes(category.toLowerCase())
          )
        );
      }

      setFilteredProducts(searchedProducts);
    };

    handleSearch();
  }, [searchQuery, products, selectedCompanies, selectedCategories]);

  const handleCompanyFilter = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter((c) => c !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  const handleCategoryFilter = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const sortProductsByPrice = (order) => {
    const sortedProducts = [...filteredProducts];
    if (order === 'Price-inc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === 'Price-dec') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (order === 'Newest') {
      sortedProducts.sort((a, b) => b.id - a.id);
    } else if (order === 'featured') {
      sortedProducts.sort((a, b) => a.id - b.id);
    }
    setFilteredProducts(sortedProducts);
  };

  const resetFilters = () => {
    setSelectedCompanies([]);
    setSelectedCategories([]);
  };

  return (
    <div className="maincontainer">
      <div className="filtercol">
        <div className="filterheading">Filters</div>
        <ul className="f1">
          <h3>Company</h3>
          <li>
            <input type="checkbox" name="brand" id="brand1" checked={selectedCompanies.includes('Kedar Beej')} onChange={() => handleCompanyFilter('Kedar Beej')}/>
            <label htmlFor="brand1">Kedar Beej</label>
          </li>
          <li>
            <input type="checkbox" name="brand" id="brand2" checked={selectedCompanies.includes('Desai Seeds')} onChange={() => handleCompanyFilter('Desai Seeds')}/>
            <label htmlFor="brand2">Desai Seeds</label>
          </li>
          <li>
            <input type="checkbox" name="brand" id="brand3" checked={selectedCompanies.includes('Nutranta')} onChange={() => handleCompanyFilter('Nutranta')}/>
            <label htmlFor="brand3">Nutranta</label>
          </li>
          <li>
            <input type="checkbox" name="brand" id="brand4" checked={selectedCompanies.includes('Deepak Seeds')} onChange={() => handleCompanyFilter('Deepak Seeds')}/>
            <label htmlFor="brand4">Deepak Seeds</label>
          </li>
        </ul>
        <ul className="f2">
          <h3 className="variety">Categories</h3>
          <li>
            <input type="checkbox" name="category" id="vegetables" checked={selectedCategories.includes('vegetables')} onChange={() => handleCategoryFilter('vegetables')}/>
            <label htmlFor="vegetables">vegetables</label>
          </li>
          <li>
            <input type="checkbox" name="category" id="wheat" checked={selectedCategories.includes('wheat')} onChange={() => handleCategoryFilter('wheat')}/>
            <label htmlFor="wheat">wheat</label>
          </li>
          <li>
            <input type="checkbox" name="category" id="Mustard" checked={selectedCategories.includes('others')} onChange={() => handleCategoryFilter('others')}/>
            <label htmlFor="others">Mustard</label>
          </li>
          <li>
            <input type="checkbox" name="category" id="Bhindi" checked={selectedCategories.includes('Bhindi')} onChange={() => handleCategoryFilter('Bhindi')}/>
            <label htmlFor="legumes">Bhindi</label>
          </li>
        </ul>
        <button className="reset-button" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>
      <div className="productcol">
        <div className="sortrow">
          <div className="sortby">
            <label htmlFor="sort-dropdown">Sort By:</label>
            <select name="" id="sort-down" onChange={(e) => sortProductsByPrice(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="Price-inc">Price: low to high</option>
              <option value="Price-dec">Price: high to low</option>
              <option value="Newest">Newest</option>
            </select>
          </div>
        </div>
        <div className="productlist">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} addToCart={addToCart}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ppage;