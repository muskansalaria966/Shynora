 import { Link } from "react-router-dom";
//  import "./Collection.css";

const categories = [
  {
    id: 1,
    category: "Necklace",
    image: "/images/necklace.jpg",
    link: "/necklace",
  },
  {
    id: 2,
    category: "Ring",
    image: "/images/ring.jpg",
    link: "/ring",
  },
  {
    id: 3,
    category: "Bracelet",
    image: "/images/bracelet.jpeg",
    link: "/bracelet",
  },
  {
    id: 4,
    category: "Earrings",
    image: "/images/earrings.jpg",
    link: "/earrings",
  },
  {
    id: 5,
    category: "Bangles",
    image: "/images/bangles.jpeg",
    link: "/bangles",
  },
  {
    id: 6,
    category: "Anklets & Feets",
    image: "/images/anklets.jpeg",
    link: "/ankletsFeets",
  },
  {
    id: 7,
    category: "Hand & Waist",
    image: "/images/waist.jpeg",
    link: "/handWaist",
  },
  {
    id: 8,
    category: "Nose",
    image: "/images/nose.jpeg",
    link: "/nose",
  },
  {
    id: 9,
    category: "Hair",
    image: "/images/hair.jpeg",
    link: "/hair",
  },
];

function Collection() {
  return (
    <section className="collection">
      <h2>Featured Collection</h2>

      <div className="product-grid">
        {categories.map((item) => (
          <div className="card" key={item.id}>
            <Link to={item.link}>
              <img
                src={item.image}
                alt={item.category}
              />

              <div className="cardBody">
                <h3>{item.category}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collection;