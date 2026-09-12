// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getProductById, addReview } from "../services/api";
// import { useCart } from "../context/CartContext";
// import { useWishlist } from "../context/WishlistContext";

// function ProductDetails() {
//   const { id } = useParams();
//   const { addToCart } = useCart();

//   const {
//     addToWishlist,
//     removeFromWishlist,
//     isInWishlist,
//   } = useWishlist();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");

//   useEffect(() => {
//     const loadProduct = async () => {
//       try {
//         const data = await getProductById(id);
//         setProduct(data);
//       } catch (err) {
//         console.error(err);
//         setError("Unable to load product");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     if (product.stock <= 0) {
//       alert("This product is out of stock");
//       return;
//     }

//     addToCart(product);
//     alert(`${product.name} added to cart`);
//   };

//   const submitReview = async () => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (!user) {
//       alert("Please login first");
//       return;
//     }

//     if (!comment.trim()) {
//       alert("Please write a review");
//       return;
//     }

//     try {
//       const updatedProduct = await addReview(product._id, {
//         rating: Number(rating),
//         comment,
//         userId: user._id,
//         name: user.name,
//       });

//       setProduct(updatedProduct);
//       setComment("");
//       setRating(5);

//       alert("Review added successfully");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   if (loading) {
//     return <h2>Loading product...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   if (!product) {
//     return <h2>Product not found</h2>;
//   }

//   const wishlist = isInWishlist(product._id);

//   return (
//     <div className="product-details">

//       {/* Product Image */}
//       <div className="product-details-image">
//         <img
//           src={
//             product.image?.startsWith("http")
//               ? product.image
//               : `http://localhost:5000${product.image}`
//           }
//           alt={product.name}
//         />
//       </div>

//       {/* Product Information */}
//       <div className="product-details-info">

//         <span>{product.category}</span>

//         <h1>{product.name}</h1>

//         <h2>
//           ₹{Number(product.price).toLocaleString("en-IN")}
//         </h2>

//         <p>{product.description}</p>

//         <p>
//           <strong>Material:</strong> {product.material}
//         </p>

//         <p>
//           <strong>Stock:</strong>{" "}
//           {product.stock > 0
//             ? `${product.stock} available`
//             : "Out of Stock"}
//         </p>

//         {/* Add To Cart */}
//         <button
//           className="add-cart-btn"
//           onClick={handleAddToCart}
//           disabled={product.stock <= 0}
//         >
//           {product.stock <= 0
//             ? "Out of Stock"
//             : "Add to Cart"}
//         </button>

//         {/* Wishlist */}
//         <button
//           className="wishlist-btn"
//           onClick={() =>
//             wishlist
//               ? removeFromWishlist(product._id)
//               : addToWishlist(product)
//           }
//         >
//           {wishlist
//             ? "❤️ Remove from Wishlist"
//             : "🤍 Add to Wishlist"}
//         </button>

//         {/* Rating */}
//         <div className="rating">
//           <h3>
//             ⭐ {Number(product.averageRating || 0).toFixed(1)}
//             {" "}
//             ({product.numReviews || 0} reviews)
//           </h3>
//         </div>

//         {/* Review Form */}
//         <div className="review-section">

//           <h3>Write a Review</h3>

//           <select
//             value={rating}
//             onChange={(e) => setRating(Number(e.target.value))}
//           >
//             <option value={5}>5 ⭐</option>
//             <option value={4}>4 ⭐</option>
//             <option value={3}>3 ⭐</option>
//             <option value={2}>2 ⭐</option>
//             <option value={1}>1 ⭐</option>
//           </select>

//           <textarea
//             placeholder="Write your review..."
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//           />

//           <button onClick={submitReview}>
//             Submit Review
//           </button>

//         </div>

//         {/* Existing Reviews */}
//         <div className="reviews">

//           <h3>Customer Reviews</h3>

//           {product.reviews?.length === 0 ? (
//             <p>No reviews yet.</p>
//           ) : (
//             product.reviews?.map((review, index) => (
//               <div className="review" key={index}>

//                 <strong>{review.name}</strong>

//                 <p>
//                   {"⭐".repeat(review.rating)}
//                 </p>

//                 <p>{review.comment}</p>

//               </div>
//             ))
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

// export default ProductDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById, addReview } from "../services/api";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load product");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (Number(product.stock) <= 0) return;

    addToCart(product);
  };

  const handleWishlist = () => {
    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  const submitReview = async () => {
    const user = JSON.parse(
      localStorage.getItem("user") || "null"
    );

    if (!user) {
      alert("Please login first");
      return;
    }

    if (!comment.trim()) {
      alert("Please write a review");
      return;
    }

    try {
      const updatedProduct = await addReview(product._id, {
        rating: Number(rating),
        comment: comment.trim(),
        userId: user._id,
        name: user.name,
      });

      setProduct(updatedProduct);
      setComment("");
      setRating(5);

      alert("Review added successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return (
      <div className="product-page-message">
        <div className="loading-spinner"></div>
        <p>Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-page-message">
        <h2>{error}</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-page-message">
        <h2>Product not found</h2>
      </div>
    );
  }

  const wishlist = isInWishlist(product._id);
//   console.log("PRODUCT DETAILS:", product);
// console.log("STOCK:", product.stock);
  const stock = Number(product.stock) || 0;
  const ratingValue = Number(product.averageRating || 0);

  return (
    <div className="product-details-page">

      {/* =========================
          MAIN PRODUCT SECTION
      ========================= */}

      <div className="product-details">

        {/* Product Image */}
        <div className="product-details-image">

          <div className="image-wrapper">
            <img
              src={
                product.image?.startsWith("http")
                  ? product.image
                  : `http://localhost:5000${product.image}`
              }
              alt={product.name}
            />

            {!stock && (
              <span className="details-stock-badge">
                Out of Stock
              </span>
            )}
          </div>

        </div>

        {/* Product Information */}
        <div className="product-details-info">

          <span className="details-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          {/* Rating */}
          <div className="details-rating">

            <span className="details-stars">
              {"★".repeat(Math.round(ratingValue))}
              {"☆".repeat(5 - Math.round(ratingValue))}
            </span>

            <span>
              {ratingValue.toFixed(1)}
            </span>

            <span className="details-review-count">
              ({product.numReviews || 0} reviews)
            </span>

          </div>

          {/* Price */}
          <div className="details-price">
            ₹{Number(product.price).toLocaleString("en-IN")}
          </div>

          <div className="details-divider"></div>

          {/* Description */}
          <p className="details-description">
            {product.description}
          </p>

          {/* Product information */}
          <div className="product-specifications">

            <div className="specification">
              <span>Material</span>
              <strong>{product.material || "Premium Quality"}</strong>
            </div>

            <div className="specification">
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>

            <div className="specification">
              <span>Availability</span>
              <strong className={stock > 0 ? "in-stock" : "sold-out"}>
                {stock > 0
                  ? `${stock} available`
                  : "Out of Stock"}
              </strong>
            </div>

          </div>

          {/* Buttons */}
          <div className="details-actions">

            <button
              className="details-add-cart"
              onClick={handleAddToCart}
              disabled={stock <= 0}
            >
              {stock <= 0
                ? "Out of Stock"
                : "Add to Cart"}
            </button>

            <button
              className={`details-wishlist ${
                wishlist ? "active" : ""
              }`}
              onClick={handleWishlist}
            >
              {wishlist ? "♥" : "♡"}
            </button>

          </div>

          {/* Trust information */}
          <div className="product-benefits">

            <div>
              <span>✦</span>
              <div>
                <strong>Premium Quality</strong>
                <small>Carefully selected jewellery</small>
              </div>
            </div>

            <div>
              <span>✓</span>
              <div>
                <strong>Secure Shopping</strong>
                <small>Safe and reliable checkout</small>
              </div>
            </div>

          </div>

        </div>
      </div>


      {/* =========================
          REVIEWS SECTION
      ========================= */}

      <section className="reviews-section">

        <div className="reviews-header">
          <span>Customer Experience</span>
          <h2>Customer Reviews</h2>

          <div className="reviews-summary">
            <strong>
              {ratingValue.toFixed(1)}
            </strong>

            <div>
              <div className="details-stars">
                {"★".repeat(Math.round(ratingValue))}
                {"☆".repeat(5 - Math.round(ratingValue))}
              </div>

              <small>
                Based on {product.numReviews || 0} reviews
              </small>
            </div>
          </div>
        </div>


        <div className="reviews-content">

          {/* Existing Reviews */}
          <div className="reviews-list">

            {product.reviews?.length === 0 ? (
              <div className="no-reviews">
                <span>♡</span>
                <h3>No reviews yet</h3>
                <p>
                  Be the first to share your experience.
                </p>
              </div>
            ) : (
              product.reviews?.map((review, index) => (
                <div className="review-card" key={index}>

                  <div className="review-top">

                    <div className="review-user">
                      <div className="review-avatar">
                        {review.name?.charAt(0)?.toUpperCase() || "U"}
                      </div>

                      <div>
                        <strong>{review.name}</strong>
                        <small>Verified Customer</small>
                      </div>
                    </div>

                    <div className="review-stars">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>

                  </div>

                  <p>{review.comment}</p>

                </div>
              ))
            )}

          </div>


          {/* Review Form */}
          <div className="review-form">

            <span className="form-eyebrow">
              Share Your Experience
            </span>

            <h3>Write a Review</h3>

            <label>Rating</label>

            <select
              value={rating}
              onChange={(e) =>
                setRating(Number(e.target.value))
              }
            >
              <option value={5}>5 — Excellent</option>
              <option value={4}>4 — Very Good</option>
              <option value={3}>3 — Good</option>
              <option value={2}>2 — Fair</option>
              <option value={1}>1 — Poor</option>
            </select>

            <label>Your Review</label>

            <textarea
              placeholder="Tell us about your experience..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows="5"
            />

            <button
              className="submit-review-btn"
              onClick={submitReview}
            >
              Submit Review
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ProductDetails;