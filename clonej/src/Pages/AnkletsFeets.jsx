import { Link } from "react-router-dom";

const categories = [
  {
    id: "anklets",
    name: "Anklets",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAh49BPctohyTD_huciuud4r_ywepv7_UPstPw4UAUGg&s",
    
  },
  {
    id: "payal",
    name: "Payal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvXP6cRY86mvd-4--C0mqJBb8EepTXduw4CqvgfBL3Q&s=10 ",
  },
  {
    id: "charm ",
    name: "Charm Anklets",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDxkupU348P6SfbSPinO6ZTvIXuIe6aBCvEiTLe62tg&s=10 ",
  },
  {
    id: "beaded ",
    name: "Beaded Anklets",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELUAxZoViBhBk5icmmG2ffx9KG03HEfGC43_YaJ-Y0g&s=10 ",
  },
  {
    id:"toe",
    name:"adjustable",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NvKHyH5sb09tp0j8ZEKfUGGzMx0fEgCqK7TQ5ItD7A&s=10 ",
  },
  {
    id:"toe rings",
    name:"Toe Rings",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbEOzF6yYjCHx1jcYi8SK1ge1kgxJKVmd9p0LIpz6EQ&s",
  }
  
];

export default function AnkletsFeets() {
  return (
    <div className="ankletsFeets-page">
      <h1>Anklets & Feets Collection</h1>

      <div className="ankletsFeets-grid">
        {categories.map((item) => (
          <div className="ankletsFeets-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <Link to={`/ankletsFeets/${item.id}`} className="btn">
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

