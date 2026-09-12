// import { useCart } from "../context/CartContext";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { createOrder } from "../services/api";
// import "./Checkout.css";

// function Checkout() {
//   const { cart, clearCart } = useCart();
//   const user = JSON.parse(localStorage.getItem("user"));
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [customer, setCustomer] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const total = cart.reduce(
//     (sum, item) => sum + Number(item.price) * item.quantity,
//     0
//   );

//   const handlePlaceOrder = async () => {
//     if (
//       !customer.name ||
//       !customer.email ||
//       !customer.phone ||
//       !customer.address
//     ) {
//       setError("Please fill all delivery details.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const orderData = {
//         user:user._id,
//         items: cart.map((item) => ({
//         product: item._id,
//         name: item.name,
//         price: Number(item.price),
//         quantity: item.quantity,
//         image: item.image,
//       })),

//        totalAmount: total,

//       customer,
// };

    
  



//       console.log("ORDER DATA:", orderData);

//       const result = await createOrder(orderData);

//       console.log("ORDER CREATED:", result);

//       // Empty cart after successful order
//       clearCart();

//       // Go to success page
//       // navigate('/order-success/${result._id}");
//       navigate(`/order-success/${result._id}`);

//     } catch (err) {
//       console.error("PLACE ORDER ERROR:", err);
//       setError(err.message || "Failed to place order");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (cart.length === 0) {
//     return (
//       <div className="checkout-page">
//         <h1>Checkout</h1>

//         <h2>Your cart is empty</h2>

//         <Link to="/collection">
//           Continue Shopping
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="checkout-page">

//       <h1>Checkout</h1>

//       {/* PRODUCTS */}
//       <div className="checkout-items">

//         {cart.map((item) => (
//           <div
//             key={item._id}
//             className="checkout-item"
//           >

//             <img
//               src={`http://localhost:5000${item.image}`}
//               alt={item.name}
//               width="100"
//             />

//             <div>
//               <h3>{item.name}</h3>

//               <p>
//                 Price: ₹
//                 {Number(item.price).toLocaleString("en-IN")}
//               </p>

//               <p>
//                 Quantity: {item.quantity}
//               </p>
//             </div>

//           </div>
//         ))}

//       </div>


//       {/* CUSTOMER DETAILS */}

//       <div className="customer-form">

//         <h2>Delivery Details</h2>

//         <input
//           type="text"
//           placeholder="Full Name"
//           value={customer.name}
//           onChange={(e) =>
//             setCustomer({
//               ...customer,
//               name: e.target.value,
//             })
//           }
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={customer.email}
//           onChange={(e) =>
//             setCustomer({
//               ...customer,
//               email: e.target.value,
//             })
//           }
//         />

//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={customer.phone}
//           onChange={(e) =>
//             setCustomer({
//               ...customer,
//               phone: e.target.value,
//             })
//           }
//         />

//         <textarea
//           placeholder="Delivery Address"
//           value={customer.address}
//           onChange={(e) =>
//             setCustomer({
//               ...customer,
//               address: e.target.value,
//             })
//           }
//         />

//       </div>


//       {/* TOTAL */}

//       <h2>
//         Total: ₹{total.toLocaleString("en-IN")}
//       </h2>


//       {/* ERROR */}

//       {error && (
//         <p className="checkout-error">
//           {error}
//         </p>
//       )}


//       {/* PLACE ORDER */}

//       { <button
//         className="place-order-btn"
//         onClick={handlePlaceOrder}
//         disabled={loading}
//       >
//         {loading ? "Placing Order..." : "Place Order"}
//       </button> }
      

//     </div>
//   );
// }

// export default Checkout; 

import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createOrder } from "../services/api";
import "./Checkout.css";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });

    if (error) {
      setError("");
    }
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (
      !customer.name.trim() ||
      !customer.email.trim() ||
      !customer.phone.trim() ||
      !customer.address.trim()
    ) {
      setError("Please fill in all delivery details.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const orderData = {
        items: cart.map((item) => ({
          product: item._id,
          name: item.name,
          price: Number(item.price),
          quantity: item.quantity,
          image: item.image,
        })),
        customer,
      };

      const result = await createOrder(orderData);

      clearCart();

      navigate(`/order-success/${result._id}`);
    } catch (err) {
      console.error("PLACE ORDER ERROR:", err);
      setError(err.message || "Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">
          <div className="checkout-empty-icon">♡</div>
          <h1>Your cart is empty</h1>
          <p>Add something beautiful before checking out.</p>

          <Link to="/collection" className="checkout-shopping-btn">
            Explore Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      {/* HEADER */}
      <div className="checkout-header">
        <span>SECURE CHECKOUT</span>
        <h1>Complete Your Order</h1>
        <p>Almost there — just add your delivery details.</p>
      </div>

      <form
        className="checkout-layout"
        onSubmit={handlePlaceOrder}
      >

        {/* LEFT SIDE */}
        <div className="checkout-main">

          {/* DELIVERY DETAILS */}
          <section className="checkout-card">

            <div className="section-heading">
              <div className="section-number">01</div>

              <div>
                <h2>Delivery Details</h2>
                <p>Where should we deliver your jewellery?</p>
              </div>
            </div>

            <div className="form-grid">

              <div className="form-group">
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={customer.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={customer.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={customer.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="address">
                  Delivery Address
                </label>

                <textarea
                  id="address"
                  name="address"
                  rows="4"
                  placeholder="House number, street, city, state, pincode..."
                  value={customer.address}
                  onChange={handleChange}
                />
              </div>

            </div>

          </section>

          {/* PAYMENT INFO */}
          <section className="checkout-card payment-card">

            <div className="section-heading">
              <div className="section-number">02</div>

              <div>
                <h2>Payment</h2>
                <p>Simple and secure order placement.</p>
              </div>
            </div>

            <div className="payment-placeholder">
              <div className="payment-icon">✓</div>

              <div>
                <strong>Cash on Delivery</strong>
                <p>
                  Pay securely when your order arrives.
                </p>
              </div>
            </div>

          </section>

        </div>

        {/* RIGHT SIDE */}
        <aside className="checkout-summary">

          <span className="summary-eyebrow">
            YOUR ORDER
          </span>

          <h2>Order Summary</h2>

          <div className="checkout-products">

            {cart.map((item) => {
              const imageUrl = item.image?.startsWith("http")
                ? item.image
                : `http://localhost:5000${item.image}`;

              return (
                <div
                  className="checkout-product"
                  key={item._id}
                >
                  <img
                    src={imageUrl}
                    alt={item.name}
                  />

                  <div className="checkout-product-info">
                    <h3>{item.name}</h3>

                    <p>
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <strong>
                    ₹{(
                      Number(item.price) * item.quantity
                    ).toLocaleString("en-IN")}
                  </strong>
                </div>
              );
            })}

          </div>

          <div className="summary-divider" />

          <div className="checkout-row">
            <span>Subtotal</span>
            <span>
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="checkout-row">
            <span>Shipping</span>
            <span className="free">FREE</span>
          </div>

          <div className="summary-divider" />

          <div className="checkout-total">
            <span>Total</span>
            <strong>
              ₹{total.toLocaleString("en-IN")}
            </strong>
          </div>

          {error && (
            <div className="checkout-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="place-order-btn"
            disabled={loading}
          >
            {loading ? (
              "Placing Order..."
            ) : (
              <>
                Place Order
                <span>→</span>
              </>
            )}
          </button>

          <div className="checkout-trust">
            <span>✓</span>
            Secure checkout &nbsp; • &nbsp; Free shipping
          </div>

          <Link
            to="/cart"
            className="back-cart-link"
          >
            ← Back to Cart
          </Link>

        </aside>

      </form>
    </div>
  );
}

export default Checkout;