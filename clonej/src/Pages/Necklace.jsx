// function Necklace() {
//   return (
//     <div>
//       <h1>Necklace Collection</h1>
//       <p>Welcome to our beautiful necklace collection.</p>

//       <img
//         src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80"
//         alt="Necklace"
//         width="300"
//       />
//     </div>
//   );
// }

// export default Necklace;

// import { Link } from "react-router-dom";
// import necklaceData from "../Components/Necklacedata";

// function Necklace() {
//   return (
//     <div className="necklace-page1">
//       <h1>Necklace Collection</h1>
//        <p>Welcome to our beautiful necklace collection.</p>

//       <div className="necklace-grid1">
//         {necklaceData.map((item) => (
//           <div className="necklace-card1" key={item.id}>
//             <img src={item.image} alt={item.category} />

//             <h2>{item.category}</h2>

//             <Link to={`/necklace/${item.id}`}>
//               <button>Shop Now</button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Necklace;

import { Link } from "react-router-dom";
// import "./necklace.css";

const categories = [
  {
    id: "gold",
    name: "Gold Necklaces",
    image: "/necklace/images.jpeg",
  },
  {
    id: "diamond",
    name: "Diamond Necklaces",
    image: "/necklace/diamond.jpeg",
  },
  {
    id: "bridal",
    name: "Bridal Necklaces",
    image: "/necklace/bridal.jpeg",
  },
  {
    id: "choker",
    name: "Choker Necklaces",
    image: "/necklace/chokar.jpeg",
  },
  {
    id: "pearl",
    name: "Pearl Necklaces",
    image: "/necklace/pearl.jpeg",
  },
  {
    id: "layered",
    name: "Layered Necklaces",
    image: "/necklace/layered.jpeg",
  }
];

export default function Necklace() {
  return (
    <div className="necklace-page">
      <h1>Necklace Collection</h1>

      <div className="necklace-grid">
        {categories.map((item) => (
          <div className="necklace-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <Link to={`/necklaces/${item.id}`} className="btn">
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}