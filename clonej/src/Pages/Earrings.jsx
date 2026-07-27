// function Earrings() {
//   return (
//     <div>
//       <h1>Earrings Collection</h1>
//       <p>Browse our beautiful earrings.</p>

//       <img
//         src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80"
//         alt="Earrings"
//         width="300"
//       />
//     </div>
//   );
// }

// export default Earrings;

import { Link } from "react-router-dom";
// import "./earring.css";

const categories = [
  {
    id: "gold",
    name: "Gold Earrings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwdpEZ79NSounkdFRvcK9l0bsSToG-QAXxwQEyRv1XQ&s=10",
  },
  {
    id: "diamond",
    name: "Diamond Earrings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZu6SVGn3WJG2SFpg3Cvl2dUeDpoPQ57hhZHgs7SUlg&s=10",
  },
  {
    id: "hoops",
    name: "Hoop Earrings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPTOhLugCongJbiY3Uqpo4DFY09zGJkZA6tueFtjj8A&s",
  },
  {
    id: "stud",
    name: "Stud Earrings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtPX7_yCdi3AxFmVsdKoMQxsiLURbywY9l_2D1kEa1_g&s=10",
  },
  {
    id: "jhumka",
    name: "Jhumka Earrings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ne8ifp_vK1mRGvXBFMcio6Pd-1chYydscXi7dZlAiA&s=10",
  },
  {
    id: "drop",
    name: "Drop Earrings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBH9ZtqoPdyP2wXft_9N6u1jlXFYJVZ22u7b6IhB1Xg&s",
  }
];

export default function Earrings() {
  return (
    <div className="earring-page">
      <h1>Earring Collection</h1>

      <div className="earring-grid">
        {categories.map((item) => (
          <div className="earring-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <Link to={`/earrings/${item.id}`} className="btn">
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}