import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import Navbar from './navbar.js';

export default function Header({ onSearch, cartItems, cartCount, removeFromCart, addToCart }) {
  const [isSticky, setIsSticky] = useState(false);
  const [loginPopupActive, setLoginPopupActive] = useState(false);
  const [cartPopupActive, setCartPopupActive] = useState(false);
  const [searchButtonBg, setSearchButtonBg] = useState('transparent');
  const popupRef = useRef(null);


  // const handleAddToCart = () => {
  //   addToCart(product);
  // };


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 25);
      setSearchButtonBg(scrollY > 25 ? 'white' : 'lightgreen');
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target) && event.target.closest('#loginpopup, #cartpopup') === null) {
        setLoginPopupActive(false);
        setCartPopupActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef]);

  const headerClass = isSticky ? 'headercontainer sticky' : 'headercontainer';
  const headerStyle = {
    boxShadow: isSticky ? '0 0.1rem 1rem 0.5rem rgba(0, 0, 0, 0.25)' : 'none',
    color: isSticky ? 'brown' : 'black',
    backgroundColor: isSticky ? 'lightgreen' : 'transparent',
  };

  const toggleLoginPopup = () => {
    setLoginPopupActive(!loginPopupActive);
  };

  const toggleCartPopup = () => {
    setCartPopupActive(!cartPopupActive);
  };

  const handleSearchInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <header className={headerClass} style={headerStyle}>
        <div className="topc">
          <div className="logoimg">
            <a href="#top">
              <img src="./photos/companylogo.jpg" alt="Company logo" width="200px" />
            </a>
          </div>
          <div className="rest-header">
            <div className="companyname">Shrinath Sales Corporation</div>
            <div className="searchbox">
              <form className="search-container">
                <input type="text" name="searcher" id="searchres" placeholder="Search for seeds..." onChange={handleSearchInputChange} />
                <button type="button" id="searchbutton" style={{ backgroundColor: searchButtonBg }}>
                  <img src="./photos/coffee-beans.png" alt="searchicon" width="18px" />
                </button>
              </form>
            </div>
            <div className="loginsignin" onClick={toggleLoginPopup}>
              Sign In
            </div>
            <div className="shopcart">
              <img src="./photos/cart.png" alt="cart" width="25px" onClick={toggleCartPopup} />
              {cartCount > 0 && <sup id="cartcounter">{cartCount}</sup>}
            </div>
          </div>
        </div>
      </header>
      <div id="loginpopup" ref={popupRef} className={`popup ${loginPopupActive ? 'active' : ''}`}>
        <div className="content">
          <h2>Sign-In</h2>
          <form>
            <input type="text" name="credential" placeholder=" Mobile / Email" />
            <button type="button">Submit</button>
          </form>
        </div>
      </div>
      <div id="cartpopup" ref={popupRef} className={`popup ${cartPopupActive ? 'active' : ''}`}>
        <div className="content">
          <h2>Cart</h2>
          {cartItems.length > 0 ? (
            <>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <img id="cart-image" src={item.image} alt={item.name} width="50" height="50" />
                    {item.name} - &#8377;{item.price}
                    <button id="cart-dec-button" onClick={() => removeFromCart(index)}>
                      -
                    </button>
                    {item.frequency}
                    <button id="cart-inc-button" onClick={() => addToCart(item)}>
                      +
                    </button>
                  </li>
                ))}
              </ul>
              <div>
                <p>
                  Total: &#8377;
                  {cartItems.reduce((total, item) => total + item.price * item.frequency, 0)}
                </p>
                <button id="checkout-button">Checkout</button>
              </div>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>

      <Navbar />
    </>
  );
}