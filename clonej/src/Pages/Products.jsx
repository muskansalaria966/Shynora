import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let data = [...products];

    // Search
    if (search) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category
    if (category !== "All") {
      data = data.filter(
        (item) =>
          item.category.toLowerCase() ===
          category.toLowerCase()
      );
    }

    // Sort
    if (sort === "low") {
      data.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sort === "high") {
      data.sort((a, b) => Number(b.price) - Number(a.price));
    }

    setFilteredProducts(data);
  }, [products, search, category, sort]);

  return (
    <div className="products-page">

      <h1>All Jewellery</h1>

      <div className="filters">

        <input
          type="text"
          placeholder="Search Jewellery..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Necklace">Necklace</option>
          <option value="Ring">Ring</option>
          <option value="Bracelet">Bracelet</option>
          <option value="Earrings">Earrings</option>
          <option value="Bangles">Bangles</option>
          <option value="Hair">Hair</option>
          <option value="Nose">Nose</option>
          <option value="HandWaist">HandWaist</option>
          <option value="AnkletsFeets">AnkletsFeets</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">
            Price Low → High
          </option>
          <option value="high">
            Price High → Low
          </option>
        </select>

      </div>

      <div className="products-grid">

        {filteredProducts.length === 0 ? (
          <h2>No Products Found</h2>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))
        )}

      </div>

    </div>
  );
}

export default Products;