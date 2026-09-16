import React from "react";
const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-info">
          <span className="subtitle">Luxury Jewellery</span>
          <h1>Get In Touch</h1>

          <p>
            We'd love to hear from you. Whether you're looking for a custom
            jewellery piece, have questions about an order, or simply want to
            explore our latest collections, our team is here to assist you.
          </p>

          {/* <div className="info-card">
            <h3>📍 Visit Our Store</h3>
            <p>123 Ranjit Avenue, Amritsar</p>
          </div> */}

          <div className="info-card">
            <h3>📞 Call Us</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="info-card">
            <h3>✉ Email</h3>
            <p>support@shynora.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-form-card1">
          <h2>Send a Message</h2>

          <form>
            <div className="input-group">
              <input type="text" placeholder="Full Name" required />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="input-group">
              <input type="text" placeholder="Subject" />
            </div>

            <div className="input-group">
              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Google Map Placeholder */}
      {/* <div className="map-section">
        <iframe
          title="location"
          src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>
      </div> */}
    </div>
  );
};

export default ContactPage;