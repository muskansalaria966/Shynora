import { useParams } from "react-router-dom";
import AnkletsFeetsData from "../Data/AnkletsFeetsData";
// import "./bracelet.css";

export default function AnkletsFeetsCategory(){

const {category}=useParams();

const ankletsFeets=AnkletsFeetsData[category];

return(

<div className="ankletsFeets-page">

<h1>{category.toUpperCase()} Anklets & Feets</h1>

<div className="ankletsFeets-grid">

{ankletsFeets.map((item)=>(

<div className="ankletsFeets-card" key={item.id}>

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