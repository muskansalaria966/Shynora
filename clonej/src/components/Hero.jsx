import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-left">
        <span className="tag">✨ Timeless Luxury</span>

        <h1>
          Crafted to
          <br />
          <span>Shine Forever</span>
        </h1>

        <p>
          Discover our premium collection of handcrafted rose gold jewellery.
          Elegant necklaces, rings, bracelets, and earrings designed to make
          every moment unforgettable.
        </p>

        <div className="buttons">
          <Link to="/collection">
            <button className="primary-btn">Explore Collection</button>
          </Link>

          <Link to="/collection">
            <button className="secondary-btn">Shop New Arrivals</button>
          </Link>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-card">
          {images.map((img, index) => (
            <img
              key={img}
              src={img}
              alt={`Jewellery collection ${index + 1}`}
              className={index === current ? "active" : ""}
            />
          ))}

          <div className="slider-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={index === current ? "active" : ""}
                onClick={() => setCurrent(index)}
                aria-label={`Show jewellery image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}