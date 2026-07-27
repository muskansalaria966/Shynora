import { useParams } from "react-router-dom";
import HandWaist from "../Data/HandWaistData";
import HandWaistData from "../Data/HandWaistData";
// import "./earring.css";

export default function HandWaistCategory(){

const { category } = useParams();

const handwaist = HandWaistData[category];

return(

<div className="handwaist-page">

<h1>{category.toUpperCase()} HandWaist Accessories</h1>

<div className="handwaist-grid">

{handwaist.map((item)=>(

<div className="handwaist-card" key={item.id}>

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