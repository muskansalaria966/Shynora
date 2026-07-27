import React from "react";
import Navbar from "../components/Navbar";
import { FaHeart, FaShoppingBag, FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Rose Gold Diamond Ring",
    price: "₹80000",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Luxury Pendant Necklace",
    price: "₹150000",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
  },
 
  {
    id: 3,
    name: "Elegant Pearl Earrings",
    price: "₹90000",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=80",
  },
  
  {
    id: 4,
    name: "Classic Rose Gold Bracelet",
    price: "₹100000",image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80",
  },

];

export default function NewArrivals() {
  return (
    <section className="arrivals">
      <div className="arrivals-title">
        <span>✦ New Collection</span>

        <h2>
          New
          <span> Arrivals</span>
        </h2>

        <p>
          Discover our newest handcrafted jewellery designed with timeless
          elegance and modern luxury.
        </p>
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            

            {/* <button className="wishlist">
              <FaHeart />
            </button> */}

            <div className="image-box">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="product-info">
              
              <h3>{item.name}</h3>

              <h4>{item.price}</h4>

              <button className="cart-btn">
                <FaShoppingBag />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
