import { useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/api";
import "./AdminProducts.css";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    description: "",
    stock: "",
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data || []);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      category: "",
      price: "",
      image: "",
      description: "",
      stock: "",
    });

    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.category || !form.price || !form.stock) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setSaving(true);

      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("category", form.category);
      formData.append("price", form.price);
      formData.append("stock", form.stock);
      formData.append("description", form.description);

      if (form.image instanceof File) {
        formData.append("image", form.image);
      }

      if (editingId) {
        await updateProduct(editingId, formData);
      } else {
        if (!(form.image instanceof File)) {
          alert("Please select a product image.");
          return;
        }

        await createProduct(formData);
      }

      resetForm();
      await loadProducts();

      alert(
        editingId
          ? "Product updated successfully."
          : "Product added successfully."
      );
    } catch (err) {
      console.error(err);
      alert(err.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  const editProduct = (product) => {
    setEditingId(product._id);

    setForm({
      name: product.name || "",
      category: product.category || "",
      price: product.price || "",
      image: "",
      description: product.description || "",
      stock: product.stock || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const removeProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      await deleteProduct(id);
      await loadProducts();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to delete product.");
    }
  };

  const getImageUrl = (image) => {
    if (!image) return "";

    if (image.startsWith("http")) {
      return image;
    }

    return `http://localhost:5000${image}`;
  };

  return (
    <div className="admin-products">

      {/* HEADER */}
      <div className="products-admin-header">
        <div>
          <span className="admin-products-eyebrow">
            JEWELS ADMIN
          </span>

          <h1>Product Management</h1>

          <p>
            Add, edit and manage products in your jewellery collection.
          </p>
        </div>

        <div className="product-count">
          <strong>{products.length}</strong>
          <span>Products</span>
        </div>
      </div>

      {/* FORM */}
      <div className="product-form-card">

        <div className="form-card-header">
          <div>
            <span>
              {editingId ? "EDIT PRODUCT" : "NEW PRODUCT"}
            </span>

            <h2>
              {editingId
                ? "Update Product"
                : "Add New Product"}
            </h2>
          </div>

          {editingId && (
            <button
              type="button"
              className="cancel-edit-btn"
              onClick={resetForm}
            >
              Cancel Edit
            </button>
          )}
        </div>

        <form
          className="product-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label>Product Name *</label>
            <input
              name="name"
              placeholder="e.g. Rose Gold Necklace"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Category *</label>
            <input
              name="category"
              placeholder="e.g. Necklace"
              value={form.category}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Price (₹) *</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              min="0"
              value={form.price}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Stock *</label>
            <input
              type="number"
              name="stock"
              placeholder="Available quantity"
              min="0"
              value={form.stock}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Product Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />

            {editingId && (
              <small>
                Leave empty to keep the current image.
              </small>
            )}
          </div>

          <div className="form-group full-width">
            <label>Description</label>

            <textarea
              name="description"
              placeholder="Write a short description of the product..."
              value={form.description}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <div className="form-actions">

            <button
              type="submit"
              className="save-product-btn"
              disabled={saving}
            >
              {saving
                ? "Saving..."
                : editingId
                ? "Update Product"
                : "Add Product"}
            </button>

            {editingId && (
              <button
                type="button"
                className="secondary-btn"
                onClick={resetForm}
              >
                Clear
              </button>
            )}

          </div>

        </form>
      </div>

      {/* PRODUCT LIST */}
      <div className="product-list-card">

        <div className="product-list-header">
          <div>
            <span>INVENTORY</span>
            <h2>All Products</h2>
          </div>

          <span className="inventory-count">
            {products.length} items
          </span>
        </div>

        {loading ? (
          <div className="products-loading">
            <div className="admin-product-spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="products-empty">
            <div>💎</div>
            <h3>No products yet</h3>
            <p>Add your first jewellery product above.</p>
          </div>
        ) : (
          <div className="products-table-wrapper">

            <table className="admin-products-table">

              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {products.map((product) => {

                  const outOfStock =
                    Number(product.stock) <= 0;

                  const lowStock =
                    Number(product.stock) > 0 &&
                    Number(product.stock) <= 3;

                  return (
                    <tr key={product._id}>

                      <td>
                        <div className="admin-product-info">

                          <div className="admin-product-image">
                            {product.image ? (
                              <img
                                src={getImageUrl(product.image)}
                                alt={product.name}
                              />
                            ) : (
                              <span>♡</span>
                            )}
                          </div>

                          <div>
                            <strong>{product.name}</strong>

                            <span>
                              ID: {product._id.slice(-6)}
                            </span>
                          </div>

                        </div>
                      </td>

                      <td>
                        <span className="category-badge">
                          {product.category}
                        </span>
                      </td>

                      <td>
                        <strong className="admin-product-price">
                          ₹
                          {Number(
                            product.price
                          ).toLocaleString("en-IN")}
                        </strong>
                      </td>

                      <td>

                        {outOfStock ? (
                          <span className="stock-badge out">
                            Out of Stock
                          </span>
                        ) : lowStock ? (
                          <span className="stock-badge low">
                            Only {product.stock} left
                          </span>
                        ) : (
                          <span className="stock-badge available">
                            {product.stock} Available
                          </span>
                        )}

                      </td>

                      <td>

                        <div className="product-actions">

                          <button
                            className="edit-btn"
                            onClick={() =>
                              editProduct(product)
                            }
                          >
                            Edit
                          </button>

                          <button
                            className="delete-btn"
                            onClick={() =>
                              removeProduct(product._id)
                            }
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
}

export default AdminProducts;