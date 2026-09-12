// import { useCart } from "../context/CartContext";
// import { Link } from "react-router-dom";
// import "./Cart.css";

// function Cart() {
//   const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

//   const total = cart.reduce(
//     (sum, item) => sum + Number(item.price) * item.quantity,
//     0
//   );

//   if (cart.length === 0) {
//     return (
//       <div className="cart-page">
//         <h1>Your Cart</h1>

//         <div className="empty-cart">
//           <div className="empty-cart-icon">🛍️</div>
//           <h2>Your cart is empty</h2>
//           <p>Discover something beautiful for yourself.</p>

//           <Link to="/collection" className="continue-shopping">
//             Continue Shopping
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-page">

//       <div className="cart-header">
//         <h1>Your Cart</h1>
//         <p>{cart.length} item{cart.length > 1 ? "s" : ""}</p>
//       </div>

//       <div className="cart-layout">

//         {/* PRODUCTS */}
//         <div className="cart-items">

//           {cart.map((item) => (
//             <div className="cart-item" key={item._id}>

//               <div className="cart-image">
//                 <img
//                   src={`http://localhost:5000${item.image}`}
//                   alt={item.name}
//                 />
//               </div>

//               <div className="cart-details">

//                 <span className="cart-category">
//                   {item.category}
//                 </span>

//                 <h2>{item.name}</h2>

//                 <p className="cart-price">
//                   ₹{Number(item.price).toLocaleString("en-IN")}
//                 </p>

//                 <button
//                   className="remove-btn"
//                   onClick={() => removeFromCart(item._id)}
//                 >
//                   Remove
//                 </button>

//               </div>

//               <div className="quantity-box">

//                 <button
//                   onClick={() => decreaseQuantity(item._id)}
//                 >
//                   −
//                 </button>

//                 <span>{item.quantity}</span>

//                 <button
//                   onClick={() => increaseQuantity(item._id)}
//                   disabled={item.quantity >= item.stock}
//                 >
//                   +
//                 </button>

//               </div>

//             </div>
//           ))}

//         </div>

//         {/* SUMMARY */}
//         <div className="cart-summary">

//           <h2>Order Summary</h2>

//           <div className="summary-row">
//             <span>Subtotal</span>
//             <span>
//               ₹{total.toLocaleString("en-IN")}
//             </span>
//           </div>

//           <div className="summary-row">
//             <span>Shipping</span>
//             <span className="free">FREE</span>
//           </div>

//           <div className="summary-line"></div>

//           <div className="summary-total">
//             <span>Total</span>
//             <strong>
//               ₹{total.toLocaleString("en-IN")}
//             </strong>
//           </div>

//           <Link to="/checkout" className="checkout-btn">
//              Proceed to Checkout
//           </Link>

//           <Link
//             to="/collection"
//             className="continue-link"
//           >
//             ← Continue Shopping
//           </Link>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default Cart;

import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty-header">
          <span>Your Shopping Bag</span>
          <h1>Your Cart</h1>
        </div>

        <div className="empty-cart">
          <div className="empty-cart-icon">♡</div>

          <h2>Your cart is waiting</h2>

          <p>
            Discover something beautiful and add it to your collection.
          </p>

          <Link to="/collection" className="continue-shopping">
            Explore Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">

      {/* HEADER */}
      <div className="cart-header">
        <div>
          <span className="cart-eyebrow">YOUR SHOPPING BAG</span>
          <h1>Your Cart</h1>
          <p>
            {cart.length} item{cart.length !== 1 ? "s" : ""} in your bag
          </p>
        </div>

        <Link to="/collection" className="cart-continue-top">
          ← Continue Shopping
        </Link>
      </div>

      <div className="cart-layout">

        {/* CART ITEMS */}
        <div className="cart-items">

          {cart.map((item) => {
            const itemTotal =
              Number(item.price) * item.quantity;

            const imageUrl = item.image?.startsWith("http")
              ? item.image
              : `http://localhost:5000${item.image}`;

            return (
              <div className="cart-item" key={item._id}>

                <Link
                  to={`/product/${item._id}`}
                  className="cart-image"
                >
                  <img
                    src={imageUrl}
                    alt={item.name}
                  />
                </Link>

                <div className="cart-details">

                  <span className="cart-category">
                    {item.category}
                  </span>

                  <Link
                    to={`/product/${item._id}`}
                    className="cart-product-name"
                  >
                    <h2>{item.name}</h2>
                  </Link>

                  <p className="cart-price">
                    ₹{Number(item.price).toLocaleString("en-IN")}
                  </p>

                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item._id)
                    }
                  >
                    Remove
                  </button>

                </div>

                <div className="cart-item-right">

                  <div className="quantity-box">

                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item._id)
                      }
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item._id)
                      }
                      disabled={
                        item.stock &&
                        item.quantity >= item.stock
                      }
                    >
                      +
                    </button>

                  </div>

                  <strong className="cart-item-total">
                    ₹{itemTotal.toLocaleString("en-IN")}
                  </strong>

                </div>

              </div>
            );
          })}

        </div>

        {/* ORDER SUMMARY */}
        <aside className="cart-summary">

          <span className="summary-eyebrow">
            ORDER SUMMARY
          </span>

          <h2>Complete Your Order</h2>

          <div className="summary-row">
            <span>
              Subtotal ({cart.length} item
              {cart.length !== 1 ? "s" : ""})
            </span>

            <span>
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span className="free">FREE</span>
          </div>

          <div className="summary-line" />

          <div className="summary-total">
            <span>Total</span>

            <strong>
              ₹{total.toLocaleString("en-IN")}
            </strong>
          </div>

          <Link
            to="/checkout"
            className="checkout-btn"
          >
            Proceed to Checkout
            <span>→</span>
          </Link>

          <div className="secure-note">
            <span>✓</span>
            Secure checkout
          </div>

          <Link
            to="/collection"
            className="continue-link"
          >
            ← Continue Shopping
          </Link>

        </aside>

      </div>
    </div>
  );
}

export default Cart;