import { useParams } from "react-router-dom";
import NoseData from "../Data/NoseData";
// import "./earring.css";

export default function NoseCategory(){

const { category } = useParams();

const nose = NoseData[category];

return(

<div className="nose-page">

<h1>{category.toUpperCase()} Nose </h1>

<div className="nose-grid">

{nose.map((item)=>(

<div className="nose-card" key={item.id}>

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