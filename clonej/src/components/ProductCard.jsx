import {Link} from "react-router-dom";

function ProductCard({ image, name, category, price,link }) {
  return (
    <div className="card">
         <Link to={link}>
           <img src={image} alt={name} />
         </Link>
        <div className="cardBody">
         <span>{category}</span>

       </div>
     </div>
   );
}
export default ProductCard;
