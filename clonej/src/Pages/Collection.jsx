import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import {Link} from "react-router-dom";

const products = [
  {
    id: 1,
    category: "Necklace",
    image: "/images/necklace.jpg",
    link: "/Necklace",
  },
  {
    id: 2,
    category: "Ring",
    image: "/images/ring.jpg",
    link: "/Ring",
  },
  {
    id: 3,
    category: "Bracelet",
    image: "images/bracelet.jpeg",
    link: "/Bracelet",
  },
  {
    id: 4,
    category: "Earrings",
    image: "/images/earrings.jpg",
    link: "/Earrings",
  },
  {
    id:5,
    category:"Bangles",
    image:"/images/bangles.jpeg ",
    link:"/Bangles",
  },
  {
    id:6,
    category:"Anklets & Feets",
    image:"/images/anklets.jpeg ",
    link:"/AnkletsFeets",
  },
  {
    id:7,
    category:"Hand & Waist ",
    image:"/images/waist.jpeg ",
    link:"/HandWaist",
  },
  {
    id:8,
    category:"Nose",
    image:"/images/nose.jpeg ",
    link:"/Nose",

  },
  {
    id:9,
    category:"Hair",
    image:"/images/hair.jpeg ",
    link:"/Hair",
  },
];


function Collection() {
  return (
    <section className="collection">
      <h2>Featured Collection</h2>

      <div className="grid">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Collection;