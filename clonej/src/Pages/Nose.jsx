import { Link } from "react-router-dom";

const categories = [
  {
    id: "pin",
    name: "Nose Pin",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirV_xN-BrrQTYkM5xTHFFWsjvSIuAW3u4Ln-Lp0Tzew&s=10",
  },
  {
    id: "ring",
    name: "Nose Ring",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtO5-zXettq9g48JFw0Kmiy82TJhLBpYdMYX9QHEWyw&s=10",
  },
  {
    id: "nath",
    name: "Nath",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRje4sG5DrcbC_M-Vydk9PH5NXOIOLPJwSOXGom3SGpw&s=10",
  },
  {
    id: "septum",
    name: "Septum Ring",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrr8UFCT-8k6oN-SjzByFaWv8TxKat7oWQd5dlb59sQ&s=10",
  }, 
];

export default function Nose() {
  return (
    <div className="nose-page">
      <h1>Nose Jewellery Collection</h1>

      <div className="nose-grid">
        {categories.map((item) => (
          <div className="nose-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <Link to={`/nose/${item.id}`} className="btn">
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

