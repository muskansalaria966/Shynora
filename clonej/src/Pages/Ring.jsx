// function Ring() {
//   return (
//     <div>
//       <h1>Ring Collection</h1>
//       <p>Explore our elegant rings.</p>

//       <img
//         src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=80"
//         alt="Ring"
//         width="300"
//       />
//     </div>
//   );
// }

// export default Ring;

// import { Link } from "react-router-dom";
// import "./ring.css";

// const rings = [
//   { id: 1, name: "Royal Gold Ring", price: "₹25,999", image: "/images/ring1.jpg" },
//   { id: 2, name: "Diamond Crown Ring", price: "₹35,499", image: "/images/ring2.jpg" },
//   { id: 3, name: "Luxury Wedding Ring", price: "₹42,999", image: "/images/ring3.jpg" }
// ];

// export default function Ring() {
//   return (
//     <div className="ring-page">
//       <h1>Ring Collection</h1>

//       <div className="ring-grid">
//         {rings.map((ring) => (
//           <div className="ring-card" key={ring.id}>
//           <div className="image-box">
//              <img src={ring.image} alt={ring.name} />
//           </div>

//           <div className="card-content">
//             <h3>{ring.name}</h3>
//             <p className="price">{ring.price}</p>
//             {/* <p className="description">
//                   Elegant handcrafted rose gold ring with premium finish.
//             </p> */}

//             <Link to={`/ring/${ring.id}`} className="btn">
//                Shop Now
//             </Link>
//             </div>
//           </div>
//           // <div className="ring-card" key={ring.id}>
//           //   <img src={ring.image} alt={ring.name} />
//           //   <h3>{ring.name}</h3>
//           //   <p>{ring.price}</p>

//           //   <Link to={`/ring/${ring.id}`} className="btn">
//           //     View Details
//           //   </Link>
//           // </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
// import "./ring.css";

const categories = [
  {
    id: "gold",
    name: "Gold Rings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zSloc4e2RD5PpTxswjuvjwBtPaYbYeWFgCE-5AiQEA&s=10",
  },
  {
    id: "diamond",
    name: "Diamond Rings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQooaoJufilhUSDY1G8mj7SJWVbait0K_FUHBUUTd8w&s=10",
  },
  {
    id: "ethnic",
    name: "Ethnic Rings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6TotNpOo2G_tNpqwk9S3L-NeBTAnLHp2qPT1Ru-0WMw&s=10",
  },
  {
    id: "wedding",
    name: "Wedding Rings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg8Q_KL18nOTYN17pS0yckyG63apBKYvj2tS9ZNciNxQ&s=10",
  },
  {
    id:"engagement ",
    name:"Engagement Ring",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVH7kpJV4OYx7ALDHRfm9WNMZhqGxkSxCo4KnIzfD46w&s=10 ",
  },
  {
    id:"solitaire",
    name:"Solitaire Ring ",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcNce6X0_Yg8O0h98UF0aXjBAE2ZBy9QfDmuEO_bZKg&s=10 ",
  },
  {
    id:"cocktail",
    name:"Cocktail Ring ",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIphLjEuhqxuBc38jM1SaQ32sBITlZdrAa3dOcwRa0A&s=10 ",
  },
  {
    id:"fashion",
    name:"Fashion Ring",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrcg_iI9BwHu2laKrvEvgt3bg_pSvmBlanKrc6tTv1A&s=10 ",
  },
  {
    id:"Promise",
    name:"Promise Ring",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlpsxt-cznWzf25b_V9E8EjLkV5mN59Y1JYGZKQ9wCw&s=10 ",
  }
];

export default function Ring() {
  return (
    <div className="ring-page">
      <h1>Ring Collection</h1>

      <div className="ring-grid">
        {categories.map((item) => (
          <div className="ring-card" key={item.id}>
            <img src={item.image} alt="" />

            <h2>{item.name}</h2>

            <Link to={`/rings/${item.id}`} className="btn">
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}