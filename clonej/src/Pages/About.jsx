import React from "react";

const features = [
  {
    title: "Premium Quality",
    text: "Finest materials with expert craftsmanship.",
  },
  {
    title: "Elegant Designs",
    text: "Modern collections inspired by timeless luxury.",
  },
  {
    title: "Certified Jewellery",
    text: "Every piece is quality tested and certified.",
  },
  {
    title: "Lifetime Service",
    text: "Professional cleaning and maintenance support.",
  },
];

const stats = [
  ["20+", "Years Experience"],
  ["15K+", "Happy Customers"],
  ["500+", "Luxury Designs"],
  ["100%", "Certified Products"],
];

const About = () => {
  return (
    <div className="about">
      {/* Hero */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="hero-tag">OUR STORY</p>

            <h1>Crafting Timeless Elegance in Every Jewel</h1>

            <p className="hero-text">
              Every piece we create celebrates beauty, craftsmanship, and
              unforgettable moments. Inspired by timeless luxury and modern
              elegance, our jewellery is designed to become a cherished part of
              your story.
            </p>

            <button className="btn">Explore Collection</button>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=700"
              alt="Jewellery"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about-section">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=700"
          alt="About"
        
        />

        <div>
          <h2>Designed with Passion</h2>

          <p>
            We believe jewellery is more than an accessory—it's an expression
            of love, celebration, and individuality. Every design is
            thoughtfully handcrafted using premium materials and exceptional
            artistry.
          </p>

          <p>
            Our artisans blend traditional craftsmanship with contemporary
            aesthetics to create collections that remain timeless for
            generations.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Choose Us</h2>

        <div className="feature-grid">
          {features.map((item) => (
            <div key={item.title} className="feature-card">
              <div className="icon">💍</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stats-grid">
          {stats.map(([number, text]) => (
            <div key={text} className="stat-card">
              <h1>{number}</h1>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Celebrate Every Precious Moment</h2>

        <p>
          Discover jewellery that reflects elegance, beauty, and everlasting
          memories. Find your perfect piece today.
        </p>

        {/* <button className="btn light">Shop Now</button> */}
      </section>
    </div>
  );
};

export default About;