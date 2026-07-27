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