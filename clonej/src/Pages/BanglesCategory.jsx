import { useParams } from "react-router-dom";
import BanglesData from "../Data/BanglesData";
// import "./bracelet.css";

export default function BanglesCategory(){

const {category}=useParams();

const bangles=BanglesData[category];

return(

<div className="bangles-page">

<h1>{category.toUpperCase()} BANGLES</h1>

<div className="bangles-grid">

{bangles.map((item)=>(

<div className="bangles-card" key={item.id}>

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