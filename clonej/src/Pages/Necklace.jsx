import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/api";
import ProductCard from "../components/ProductCard";

const Necklace = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProductsByCategory("Necklace");

        console.log("NECKLACE DATA:", data);

        setProducts(data);
      } catch (err) {
        console.error("NECKLACE ERROR:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <h2>Loading necklaces...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section className="collection">

      <h1>Necklace Collection</h1>

      <div className="product-grid">

        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
};

export default Necklace;


