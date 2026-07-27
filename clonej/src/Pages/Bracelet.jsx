// function Bracelet() {
//   return (
//     <div className="bracelet">
//       <h1>Bracelet Collection</h1>
//       <p>Discover our stylish bracelets.</p>

//       <img
//         src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=80"
//         alt="Bracelet"
//         width="300"
//       />
//     </div>
//   );
// }

// export default Bracelet;

import { Link } from "react-router-dom";
// import "./bracelet.css";

const categories = [
  {
    id: "gold",
    name: "Gold Bracelets",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKCV0zfLxmbyW4isdpjp_z_xIp8o_Zrh2Tpc4QYbZWA&s=10",
  },
  {
    id: "diamond",
    name: "Diamond Bracelets",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy3jRm9KPTs_ISvcGLLnWrgnTKMLY09BTngxXRXYWfEw&s=10",
  },
  {
    id: "charm",
    name: "Charm Bracelets",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpMemS-Ybeyf59_wZsxHJOfTQmlTVvZe5mipuz0f_Ngw&s=10",
  },
  {
    id: "tennis",
    name: "Tennis Bracelets",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKXEPyrgZonJRYVE3mMPncBanJ4eCY4PrpaFKOjcmCVw&s=10",
  },
  {
    id:"chain",
    name:"Chain Bracelets",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIExfvkXl0xOlny7PRCywrPjX7I8-gMgZl3zmtF2kvbA&s=10 ",
  },
  {
    id:"cuff",
    name:"Cuff Bracelets",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBu7QRdoN6OMwlGrnWhtZrYIlOs2UfrN1QvanCGBtlHg&s=10 ",
  },
  {
    id:"beaded ",
    name:"Beaded Bracelets",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLrBejjs-2zLjvXIspMt9KYHLWme-8GAXt91aPEeXcNA&s=10 ",
  },
  {
  id:"leather",
  name:"Leather Bracelets",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHMRZf_HR-PsQWlIrjnO1bJVIaYlYy2jo96oEYDuXEsw&s=10 ",
},
];

export default function Bracelet() {
  return (
    <div className="bracelet-page">
      <h1>Bracelet Collection</h1>

      <div className="bracelet-grid">
        {categories.map((item) => (
          <div className="bracelet-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <Link to={`/bracelets/${item.id}`} className="btn">
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

