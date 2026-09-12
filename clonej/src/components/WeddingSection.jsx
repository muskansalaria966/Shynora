import React from "react";
import { useNavigate } from "react-router-dom";
import "./WeddingSection.css";

const weddingCategories = [
  {
    title: "Bridal Jewellery Set",
    image: "/images/necklace.jpg",
    route: "/collection",
  },
  {
    title: "Jhumka",
    image: "/images/earrings.jpg",
    route: "/earrings",
  },
  {
    title: "Mangalsutra",
    image: "/images/necklace.jpg",
    route: "/necklace",
  },
  {
    title: "Kalira & Haathphool",
    image: "/images/waist.jpeg",
    route: "/handwaist",
  },
  {
    title: "Nosepin",
    image: "/images/nose.jpeg",
    route: "/nose",
  },
  {
    title: "Mangtika",
    image: "/images/hair.jpeg",
    route: "/hair",
  },
  {
    title: "Kamarband",
    image: "/images/waist.jpeg",
    route: "/handwaist",
  },
  {
    title: "Rings",
    image: "/images/ring.jpg",
    route: "/ring",
  },
  {
    title: "Anklets",
    image: "/images/anklets.jpeg",
    route: "/ankletsFeets",
  },
];

function WeddingSection() {
  const navigate = useNavigate();

  return (
    <section className="wedding-section">
      <div className="wedding-banner">
        <div className="banner-inner">
          <span className="banner-small">THE</span>
          <h2>GRAND</h2>
          <h3>WEDDING STORE</h3>
          <p>Celebrate every beautiful beginning</p>
        </div>
      </div>

      <div className="wedding-categories">
        <div className="wedding-heading">
          <span>CURATED FOR YOUR SPECIAL DAY</span>
          <h2>Wedding Jewellery</h2>
          <p>
            Discover timeless pieces crafted to make your wedding moments
            unforgettable.
          </p>
        </div>

        <div className="wedding-category-grid">
          {weddingCategories.map((category) => (
            <div
              className="wedding-category-card"
              key={category.title}
              onClick={() => navigate(category.route)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigate(category.route);
                }
              }}
            >
              <div className="wedding-image-wrapper">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                />

                <div className="category-overlay">
                  <span>Explore</span>
                </div>
              </div>

              <div className="wedding-category-title">
                {category.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WeddingSection;