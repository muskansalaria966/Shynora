// import { useParams } from "react-router-dom";
// import necklaceData from "../Components/Necklacedata";


// function Shopping() {
//   const { id } = useParams();

//   const category =necklaceData.find(
//     (item) => item.id === Number(id)
//   );

//   return (
//     <div className="shopping-page1">
//       <h1>{category.category}</h1>

//       <div className="product-grid1">
//         {category.products.map((product) => (
//           <div className="product-card1" key={product.id}>
//             <img src={product.image} alt={product.name} />

//             <h3>{product.name}</h3>

//             <p>{product.price}</p>

//             <button>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Shopping ;

import { useParams } from "react-router-dom";
import NecklaceData from "../Data/NecklaceData";
// import "./necklace.css";

export default function NecklaceCategory(){

const { category } = useParams();

const necklaces = NecklaceData[category];

return(

<div className="necklace-page">

<h1>{category.toUpperCase()} NECKLACES</h1>

<div className="necklace-grid">

{necklaces.map((item)=>(

<div className="necklace-card" key={item.id}>

<img src={item.image} alt={item.name}/>

<h3>{item.name}</h3>

<p>{item.price}</p>

<button className="btn">
Add To Cart
</button>

</div>

))}

</div>

</div>

);

}