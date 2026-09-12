// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { useWishlist } from "../context/WishlistContext";

// function ProductCard({ product }) {
//   const { addToCart } = useCart();

//   const {
//     addToWishlist,
//     removeFromWishlist,
//     isInWishlist,
//   } = useWishlist();

//   const outOfStock = Number(product.stock) <= 0;
//   const lowStock =
//     Number(product.stock) > 0 && Number(product.stock) <= 3;

//   const handleAddToCart = () => {
//     if (outOfStock) return;

//     addToCart(product);
//     alert(`${product.name} added to cart`);
//   };

//   const handleWishlist = (e) => {
//     e.preventDefault();

//     if (isInWishlist(product._id)) {
//       removeFromWishlist(product._id);
//     } else {
//       addToWishlist(product);
//     }
//   };

//   return (
//     <div className="card">

//       {/* Product Image */}
//       <div className="cardImage">

//         <Link to={`/product/${product._id}`}>
//           <img
//             src={
//               product.image?.startsWith("http")
//                 ? product.image
//                 : `http://localhost:5000${product.image}`
//             }
//             alt={product.name}
//           />
//         </Link>

//         {/* Wishlist */}
//         <button
//           type="button"
//           className={`wishlist-btn ${
//             isInWishlist(product._id) ? "active" : ""
//           }`}
//           onClick={handleWishlist}
//           aria-label="Wishlist"
//         >
//           {isInWishlist(product._id) ? "♥" : "♡"}
//         </button>

//         {/* Stock badge */}
//         {outOfStock && (
//           <span className="stock-badge out">
//             Out of Stock
//           </span>
//         )}

//         {lowStock && (
//           <span className="stock-badge low">
//             Only {product.stock} left
//           </span>
//         )}

//         {/* New badge */}
//         {!outOfStock && !lowStock && (
//           <span className="new-badge">
//             New
//           </span>
//         )}

//       </div>

//       {/* Product Information */}
//       <div className="cardBody">

//         <span className="product-category">
//           {product.category}
//         </span>

//         <Link
//           to={`/product/${product._id}`}
//           className="product-name"
//         >
//           <h3>{product.name}</h3>
//         </Link>

//         {/* Rating */}
//         <div className="rating">
//           <span className="stars">
//             {"★".repeat(Math.round(product.averageRating || 0))}
//             {"☆".repeat(5 - Math.round(product.averageRating || 0))}
//           </span>

//           <span className="review-count">
//             ({product.numReviews || 0})
//           </span>
//         </div>

//         {/* Price */}
//         <p className="product-price">
//           ₹{Number(product.price).toLocaleString("en-IN")}
//         </p>

//         {/* Stock information */}
//         {!outOfStock && (
//           <p className="available-stock">
//             ✓ In Stock
//           </p>
//         )}

//         {/* Add to Cart */}
//         <button
//           type="button"
//           className="add-cart-btn"
//           onClick={handleAddToCart}
//           disabled={outOfStock}
//         >
//           {outOfStock ? "Out of Stock" : "Add to Cart"}
//         </button>

//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const outOfStock = Number(product.stock) <= 0;
  const lowStock =
    Number(product.stock) > 0 && Number(product.stock) <= 3;

  const handleAddToCart = () => {
    if (outOfStock) return;

    addToCart(product);
  };

  const handleWishlist = (e) => {
    e.preventDefault();

    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  const rating = Math.round(Number(product.averageRating) || 0);

  return (
    <div className="product-card">

      {/* Image Section */}
      <div className="product-card-image">

        <Link to={`/product/${product._id}`}>
          <img
            src={
              product.image?.startsWith("http")
                ? product.image
                : `http://localhost:5000${product.image}`
            }
            alt={product.name}
          />
        </Link>

        {/* Wishlist */}
        <button
          type="button"
          className={`product-wishlist ${
            isInWishlist(product._id) ? "active" : ""
          }`}
          onClick={handleWishlist}
          aria-label="Add to wishlist"
        >
          {isInWishlist(product._id) ? "♥" : "♡"}
        </button>

        {/* Stock Badge */}
        {outOfStock && (
          <span className="product-badge out-of-stock">
            Out of Stock
          </span>
        )}

        {lowStock && (
          <span className="product-badge low-stock">
            Only {product.stock} left
          </span>
        )}

        {!outOfStock && !lowStock && (
          <span className="product-badge new-product">
            New
          </span>
        )}

      </div>

      {/* Product Information */}
      <div className="product-card-body">

        <span className="product-category">
          {product.category}
        </span>

        <Link
          to={`/product/${product._id}`}
          className="product-name"
        >
          <h3>{product.name}</h3>
        </Link>

        {/* Rating */}
        <div className="product-rating">
          <span className="rating-stars">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </span>

          <span className="rating-count">
            ({product.numReviews || 0})
          </span>
        </div>

        {/* Price */}
        <div className="product-price">
          ₹{Number(product.price).toLocaleString("en-IN")}
        </div>

        {/* Stock */}
        {!outOfStock && (
          <div className="stock-status">
            <span>✓</span> In Stock
          </div>
        )}

        {/* Add to Cart */}
        <button
          type="button"
          className="product-add-cart"
          onClick={handleAddToCart}
          disabled={outOfStock}
        >
          {outOfStock ? "Out of Stock" : "Add to Cart"}
        </button>

      </div>
    </div>
  );
}

export default ProductCard;