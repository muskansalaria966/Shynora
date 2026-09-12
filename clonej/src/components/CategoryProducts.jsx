// import { useEffect, useState } from "react";
// import { getProductsByCategory } from "../services/api";
// import ProductCard from "./ProductCard";

// const CategoryProducts = ({ category, title }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         setLoading(true);

//         const data = await getProductsByCategory(category);

//         setProducts(data);
//       } catch (err) {
//         console.error(err);
//         setError("Unable to load products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProducts();
//   }, [category]);

//   if (loading) {
//     return <h2>Loading {title || category}...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   return (
//     <section className="category-page">

//       <div className="category-header">
//         <h1>{title || category}</h1>

//         <p>
//           Discover our beautiful {category.toLowerCase()} collection.
//         </p>
//       </div>

//       {products.length === 0 ? (
//         <p>No products found.</p>
//       ) : (
//         <div className="product-grid">
//             {products.map((product) => (
//     <ProductCard
//       key={product.id}
//       product={product}
//     />
            
//           ))}

//         </div>
//       )}

//     </section>
//   );
// };

// export default CategoryProducts;

import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/api";
import ProductCard from "./ProductCard";

const CategoryProducts = ({ category, title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProductsByCategory(category);

        setProducts(data || []);
      } catch (err) {
        console.error("Category products error:", err);
        setError(err.message || "Unable to load products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category]);

  if (loading) {
    return (
      <section className="category-page">
        <h2>Loading {title || category}...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="category-page">
        <h2>{error}</h2>
      </section>
    );
  }

  return (
    <section className="category-page">
      <div className="category-header">
        <h1>{title || category}</h1>

        <p>
          Discover our beautiful {category.toLowerCase()} collection.
        </p>
      </div>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoryProducts;