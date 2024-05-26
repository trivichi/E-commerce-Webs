// import './App.css';
// import ImageSlider from './Imageslider';
// import Productbox from './Productbox';
// import Header from './header';
// import Slider from './Slider';
// import Footer from './Footer';
// import Ppage from './Ppage';
// import products from './Products';
// import React, { useState } from 'react';

// function App() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//     setCartCount(cartCount + 1);
//   };

//   const removeFromCart = (id) => {
//     const updatedCartItems = [...cartItems];
//     updatedCartItems.splice(id, 1);
//     setCartItems(updatedCartItems);
//     setCartCount(cartCount - 1);
//   };
  
//   console.log("addToCart in App:", addToCart);


//   return (
//     <div className="App">
//       <Header onSearch={handleSearch} cartItems={cartItems} cartCount={cartCount} removeFromCart={removeFromCart}/>
//       <div className="twoparts">
//         <ImageSlider />
//         <Productbox addToCart={addToCart} />
//       </div>
//       <hr />
//       <Slider addToCart={addToCart}/>
//       <hr />
//       <Ppage searchQuery={searchQuery} products={products} addToCart={addToCart} />
//       <Footer />
//     </div>
//   );
// }

// export default App;














import './App.css';
import ImageSlider from './Imageslider';
import Productbox from './Productbox';
import Header from './header';
import Slider from './Slider';
import Footer from './Footer';
import Ppage from './Ppage';
import products from './Products';
import React, { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].frequency += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, frequency: 1 }]);
    }
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.map((item, index) => {
      if (index === id) {
        if (item.frequency > 1) {
          return { ...item, frequency: item.frequency - 1 };
        } else {
          return null;
        }
      }
      return item;
    }).filter(Boolean);

    setCartItems(updatedCartItems);
    setCartCount(cartCount - 1);
  };

  return (
    <div className="App">
      <Header
        onSearch={handleSearch}
        cartItems={cartItems}
        cartCount={cartCount}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
      <div className="twoparts">
        <ImageSlider />
        <Productbox addToCart={addToCart} />
      </div>
      <hr />
      <Slider addToCart={addToCart} />
      <hr />
      <Ppage
        searchQuery={searchQuery}
        products={products}
        addToCart={addToCart}
      />
      <Footer />
    </div>
  );
}

export default App;