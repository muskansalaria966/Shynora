import { useParams } from "react-router-dom";
import EarringData from "../Data/EarringsData";
// import "./earring.css";

export default function EarringCategory(){

const { category } = useParams();

const earrings = EarringData[category];

return(

<div className="earring-page">

<h1>{category.toUpperCase()} EARRINGS</h1>

<div className="earring-grid">

{earrings.map((item)=>(

<div className="earring-card" key={item.id}>

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