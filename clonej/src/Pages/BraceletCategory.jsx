import { useParams } from "react-router-dom";
import BraceletData from "../Data/BraceletData";
// import "./bracelet.css";

export default function BraceletCategory(){

const {category}=useParams();

const bracelets=BraceletData[category];

return(

<div className="bracelet-page">

<h1>{category.toUpperCase()} BRACELETS</h1>

<div className="bracelet-grid">

{bracelets.map((item)=>(

<div className="bracelet-card" key={item.id}>

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

)

}