import React from "react";
import { Link } from "react-router-dom";

const products = [
  // {
  //   name: " Ring",
  //   image: "/images/ring.jpg",    
  // },
  // {
  //   name: "Necklace",
  //   image: "/images/necklace.jpg", 
  // },
  // {
  //   name: "Earrings",
  //   image: "/images/earrings.jpg", 
  // },
  // {
  //   name: "Bracelet",
  //   image: "/images/bracelet.jpg", 
  // },
  // {
  //   name:"Bangles",
  //   image:"",
  // }
];

const Products = () => {
  return (
    <section className="products">;

      {/* <h2>Featured Collection</h2> */}

       <div className="product-grid">

         {products.map((item,index)=>(
           <div className="card" key={index}>

            <img src={item.image} alt={item.name}/>

            <h3>{item.name}</h3> 
          
            {/* <button>
              <Link to="/Ring">Shop Now</Link>
            </button> */}

            

          </div>
        ))}

      </div>

    </section>
   );
 };

export default Products;