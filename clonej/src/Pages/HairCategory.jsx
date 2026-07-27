import { useParams } from "react-router-dom";
import HairData from "../Data/HairData";
// import "./earring.css";

export default function HairCategory(){

const { category } = useParams();

const hair = HairData[category];

return(

<div className="hair-page">

<h1>{category.toUpperCase()} Hair Accessories</h1>

<div className="hair-grid">

{hair.map((item)=>(

<div className="hair-card" key={item.id}>

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