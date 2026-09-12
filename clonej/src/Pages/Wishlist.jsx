// import { Link } from "react-router-dom";
// import { useWishlist } from "../context/WishlistContext";

// function Wishlist() {
//   const { wishlist, removeFromWishlist } = useWishlist();

//   if (wishlist.length === 0) {
//     return (
//       <div style={{ padding: 40 }}>
//         <h1>Wishlist</h1>
//         <h2>Your wishlist is empty ❤️</h2>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: 30 }}>

//       <h1>My Wishlist</h1>

//       {wishlist.map((item) => (

//         <div
//           key={item._id}
//           style={{
//             display: "flex",
//             gap: 20,
//             marginBottom: 20,
//             alignItems: "center",
//           }}
//         >

//           <img
//             src={`http://localhost:5000${item.image}`}
//             width="100"
//             alt={item.name}
//           />

//           <div>

//             <h3>{item.name}</h3>

//             <p>₹{item.price}</p>

//             <button
//               onClick={() => removeFromWishlist(item._id)}
//             >
//               Remove
//             </button>

//           </div>

//         </div>

//       ))}

//       <Link to="/collection">
//         Continue Shopping
//       </Link>

//     </div>
//   );
// }

// export default Wishlist;

import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  const getImageUrl = (image) => {
    if (!image) return "";

    return image.startsWith("http")
      ? image
      : `http://localhost:5000${image}`;
  };

  if (wishlist.length === 0) {
    return (
      <section className="wishlist-page">
        <div className="wishlist-empty">
          <div className="wishlist-empty-icon">♡</div>

          <h1>My Wishlist</h1>

          <p>Your wishlist is waiting for something beautiful.</p>

          <Link to="/collection" className="wishlist-shop-btn">
            Explore Collection
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="wishlist-page">
      <div className="wishlist-header">
        <span>♡ YOUR FAVOURITES</span>
        <h1>My Wishlist</h1>
        <p>Pieces you've saved for your next special moment.</p>
      </div>

      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <article className="wishlist-card" key={item._id}>
            <Link
              to={`/product/${item._id}`}
              className="wishlist-image-link"
            >
              <div className="wishlist-image">
                <img
                  src={getImageUrl(item.image)}
                  alt={item.name}
                />
              </div>
            </Link>

            <div className="wishlist-info">
              <span className="wishlist-category">
                {item.category || "Jewellery"}
              </span>

              <Link
                to={`/product/${item._id}`}
                className="wishlist-name"
              >
                {item.name}
              </Link>

              <p className="wishlist-price">
                ₹{Number(item.price).toLocaleString("en-IN")}
              </p>

              <button
                type="button"
                className="wishlist-remove"
                onClick={() => removeFromWishlist(item._id)}
              >
                Remove from Wishlist
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="wishlist-footer">
        <Link to="/collection">
          ← Continue Shopping
        </Link>
      </div>
    </section>
  );
}

export default Wishlist;