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
        <span className="testimonial-label">♡ CUSTOMER STORIES</span>

        <h2>
          Loved by <span>Thousands</span>
        </h2>

        <p>
          Every sparkle tells a story. Discover why our customers trust us for
          life's most precious moments.
        </p>
      </div>

      <div className="testimonial-container">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.id}>
            <div className="quote">“</div>

            <div className="testimonial-profile">
              <img src={item.image} alt={item.name} loading="lazy" />

              <div>
                <h3>{item.name}</h3>

                <div className="stars" aria-label={`${item.rating} out of 5 stars`}>
                  {[...Array(item.rating)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
              </div>
            </div>

            <p className="testimonial-review">{item.review}</p>

            <span className="verified">✓ Verified Customer</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;