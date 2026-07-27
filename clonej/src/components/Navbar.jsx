// import React from "react";
// import { Link } from "react-router-dom";
// import Home from "../Pages/Home";
// import Collection from "../Pages/Collection";
// import NewArrivals from "../Pages/NewArrivals";
// import About from "../Pages/About";
// import Contact from "../Pages/Contact";
   





// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h2>✨ Shynora Jewels</h2>

//       <div className="search-box">
//         <input type="text" placeholder="Search..." />
//         <button>Search</button>
//       </div>

//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>

        

//         <li>
//           <Link to="/collection">Collection</Link>
//         </li>

//         <li>
//           <Link to="/new-arrivals">NewArrivals</Link>
//         </li>

//         <li>
//           <Link to="/about">About</Link>
//         </li>

//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
    
//     </nav>
   


//   )};

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import Home from "../Pages/Home";
import Collection from "../Pages/Collection";
import NewArrivals from "../Pages/NewArrivals";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const Navbar = () => {
  const [cartCount] = useState(0); // Initial cart count

  return (
    <nav className="navbar">
      <h2>✨ Shynora Jewels</h2>

      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/collection">Collection</Link>
        </li>

        <li>
          <Link to="/new-arrivals">New Arrivals</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Cart Icon */}
      <div className="cart">
        <FaShoppingCart className="cart-icon" />
        <span className="cart-count">{cartCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;