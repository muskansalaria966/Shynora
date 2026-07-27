// import { useParams, Link } from "react-router-dom";
// import "./ring.css";

// const rings = [
//   {
//     id: 1,
//     name: "Royal Gold Ring",
//     price: "₹25,999",
//     image: "/images/ring1.jpg",
//     description: "Elegant 22K gold ring with premium finish."
//   },
//   {
//     id: 2,
//     name: "Diamond Crown Ring",
//     price: "₹35,499",
//     image: "/images/ring2.jpg",
//     description: "Beautiful diamond ring crafted for luxury."
//   },
//   {
//     id: 3,
//     name: "Luxury Wedding Ring",
//     price: "₹42,999",
//     image: "/images/ring3.jpg",
//     description: "Perfect wedding ring with timeless elegance."
//   }
// ];

// export default function RingDetails() {
//   const { id } = useParams();

//   const ring = rings.find((item) => item.id === Number(id));

//   return (
//     <div className="details">
//       <img src={ring.image} alt={ring.name} />
//       <h2>{ring.name}</h2>
//       <h3>{ring.price}</h3>
//       <p>{ring.description}</p>

//       {/* <Link to="/ring" className="btn">
//         Back to Collection
//       </Link> */}
//       <button className="btn">
//         Add to Cart
//       </button>
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import RingData from "../Data/RingData";

export default function RingCategory(){

const {category}=useParams();

const rings=RingData[category];

return(

<div className="ring-page">

<h1>{category.toUpperCase()} COLLECTION</h1>

<div className="ring-grid">

{rings.map((ring)=>(

<div className="ring-card" key={ring.id}>

<img src={ring.image} alt="" />

<h3>{ring.name}</h3>

<h2>{ring.price}</h2>

<button className="btn">
Add To Cart
</button>

</div>

))}

</div>

</div>

)

}