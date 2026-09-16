// import React from "react";
// import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import "./Navbar.css";

// const Navbar = () => {
//   const { cart } = useCart();
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("user") || "null");

//   const cartCount = cart.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   const logoutHandler = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <Link to="/" className="logo">
//         <span className="logo-icon">✦</span>
//         <span>Jewels</span>
//       </Link>

//       {/* Navigation */}
//       <ul className="nav-links">
//         <li>
//           <Link to="/">Home</Link>
//         </li>

//         <li>
//           <Link to="/collection">Collections</Link>
//         </li>

//         <li>
//           <Link to="/products">New Arrivals</Link>
//         </li>

//         <li>
//           <Link to="/about">About</Link>
//         </li>

//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>

//       {/* Right Side */}
//       <div className="navbar-right">
//         <Link
//           to="/wishlist"
//           className="nav-icon"
//           title="Wishlist"
//           aria-label="Wishlist"
//         >
//           <FaHeart />
//         </Link>

//         <Link
//           to="/cart"
//           className="nav-icon cart-link"
//           title="Shopping Cart"
//           aria-label="Shopping Cart"
//         >
//           <FaShoppingCart />

//           {cartCount > 0 && (
//             <span className="cart-count">{cartCount}</span>
//           )}
//         </Link>

//         {user ? (
//           <div className="user-section">
//             <div className="user-info">
//               <FaUser className="user-icon" />

//               <span className="welcome">
//                 Hi, {user.name}
//               </span>
//             </div>

//             {user.role === "admin" && (
//               <Link to="/admin" className="admin-link">
//                 Admin
//               </Link>
//             )}

//             <Link to="/my-orders" className="orders-link">
//               My Orders
//             </Link>

//             <button
//               type="button"
//               className="logout-btn"
//               onClick={logoutHandler}
//             >
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div className="auth-links">
//             <Link to="/login" className="login-link">
//               Login
//             </Link>

//             <Link to="/register" className="register-btn">
//               Register
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/" className="logo" onClick={closeMenu}>
        <span className="logo-icon">✦</span>
        <span>Shynora</span>
      </Link>

      {/* DESKTOP LINKS */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/collection">Collections</Link></li>
        <li><Link to="/products">New Arrivals</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="navbar-right">

        {/* WISHLIST */}
        <Link
          to="/wishlist"
          className="nav-icon"
          aria-label="Wishlist"
        >
          <FaHeart />
        </Link>

        {/* CART */}
        <Link
          to="/cart"
          className="nav-icon cart-link"
          aria-label="Shopping Cart"
        >
          <FaShoppingCart />

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </Link>

        {/* DESKTOP USER */}
        {user && (
          <div className="desktop-user user-section">

            <div className="user-info">
              <FaUser className="user-icon" />
              <span>Hi, {user.name}</span>
            </div>

            {user.role === "admin" && (
              <Link to="/admin" className="admin-link">
                Admin
              </Link>
            )}

            <Link to="/my-orders" className="orders-link">
              My Orders
            </Link>

            <button
              type="button"
              className="logout-btn"
              onClick={logoutHandler}
            >
              Logout
            </button>

          </div>
        )}

        {/* DESKTOP LOGIN */}
        {!user && (
          <div className="desktop-auth auth-links">
            <Link to="/login" className="login-link">
              Login
            </Link>

            <Link to="/register" className="register-btn">
              Register
            </Link>
          </div>
        )}

        {/* HAMBURGER */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* =========================
          MOBILE MENU
      ========================= */}

      {menuOpen && (
        <div className="mobile-menu">

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/collection" onClick={closeMenu}>
            Collections
          </Link>

          <Link to="/products" onClick={closeMenu}>
            New Arrivals
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <div className="mobile-divider" />

          {user ? (
            <>
              <div className="mobile-user">
                <FaUser />
                <span>Hi, {user.name}</span>
              </div>

              {user.role === "admin" && (
                <Link to="/admin" onClick={closeMenu}>
                  Admin Dashboard
                </Link>
              )}

              <Link to="/my-orders" onClick={closeMenu}>
                My Orders
              </Link>

              <button
                type="button"
                className="mobile-logout"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </>
          ) : (
            <div className="mobile-auth">

              <Link to="/login" onClick={closeMenu}>
                Login
              </Link>

              <Link
                to="/register"
                className="mobile-register"
                onClick={closeMenu}
              >
                Register
              </Link>

            </div>
          )}

        </div>
      )}

    </nav>
  );
};

export default Navbar;