import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sophia Williams",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The craftsmanship is absolutely breathtaking. Every piece feels luxurious and timeless. I couldn't be happier with my rose gold necklace.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily Johnson",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Exceptional quality and beautiful packaging. The jewellery exceeded my expectations and arrived perfectly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Olivia Brown",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    review:
      "Elegant, sophisticated, and worth every penny. I've received endless compliments on my bracelet.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <span>♡ Testimonials</span>

        <h2>
          Loved by
          <span> Thousands of Customers</span>
        </h2>

        <p>
          Every sparkle tells a story. Discover why our customers trust us for
          life's most precious moments.
        </p>
      </div>

      <div className="testimonial-container">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <div className="quote">❝</div>

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <div className="stars">
              {[...Array(item.rating)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;