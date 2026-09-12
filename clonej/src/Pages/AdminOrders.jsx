import { useEffect, useState } from "react";
import {
  getOrders,
  updateOrderStatus,
} from "../services/api";
import "./AdminOrders.css";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const data = await getOrders();
      setOrders(data || []);
    } catch (error) {
      console.error("Failed to load orders:", error);
      alert(error.message || "Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  const changeStatus = async (id, status) => {
    try {
      await updateOrderStatus(id, status);
      await loadOrders();
    } catch (error) {
      console.error("Status update failed:", error);
      alert(error.message || "Failed to update status");
    }
  };

  const getImageUrl = (image) => {
    if (!image) return "";
    if (image.startsWith("http")) return image;
    return `http://localhost:5000${image}`;
  };

  const totalRevenue = orders
    .filter((order) => order.status !== "Cancelled")
    .reduce(
      (sum, order) => sum + Number(order.totalAmount || 0),
      0
    );

  const pendingCount = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const shippedCount = orders.filter(
    (order) => order.status === "Shipped"
  ).length;

  if (loading) {
    return (
      <div className="admin-orders">
        <div className="admin-orders-loading">
          <div className="orders-spinner"></div>
          <h2>Loading orders...</h2>
          <p>Please wait a moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-orders">

      {/* HEADER */}

      <div className="admin-orders-header">

        <div>
          <span className="orders-eyebrow">
            JEWELS ADMIN
          </span>

          <h1>Customer Orders</h1>

          <p>
            View and manage orders placed by your customers.
          </p>
        </div>

      </div>

      {/* STATS */}

      <div className="orders-stats">

        <div className="orders-stat">
          <span>Total Orders</span>
          <strong>{orders.length}</strong>
        </div>

        <div className="orders-stat">
          <span>Pending</span>
          <strong>{pendingCount}</strong>
        </div>

        <div className="orders-stat">
          <span>Shipped</span>
          <strong>{shippedCount}</strong>
        </div>

        <div className="orders-stat">
          <span>Revenue</span>
          <strong>
            ₹{totalRevenue.toLocaleString("en-IN")}
          </strong>
        </div>

      </div>

      {/* ORDERS */}

      {orders.length === 0 ? (
        <div className="no-orders">
          <div className="empty-orders-icon">📦</div>
          <h2>No Orders Yet</h2>
          <p>
            Customer orders will appear here once someone
            places an order.
          </p>
        </div>
      ) : (

        <div className="orders-list">

          {orders.map((order) => (

            <div
              className="order-card"
              key={order._id}
            >

              {/* ORDER HEADER */}

              <div className="order-header">

                <div>
                  <span className="order-label">
                    ORDER
                  </span>

                  <h2>
                    #{order._id.slice(-8).toUpperCase()}
                  </h2>

                  <p>
                    Placed on{" "}
                    {new Date(
                      order.createdAt
                    ).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <span
                  className={`status ${order.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  <span className="status-dot"></span>
                  {order.status}
                </span>

              </div>

              {/* CUSTOMER DETAILS */}

              <div className="customer-details">

                <h3>Customer Details</h3>

                <div className="customer-grid">

                  <div>
                    <span>Name</span>
                    <strong>
                      {order.customer?.name || "—"}
                    </strong>
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>
                      {order.customer?.email || "—"}
                    </strong>
                  </div>

                  <div>
                    <span>Phone</span>
                    <strong>
                      {order.customer?.phone || "—"}
                    </strong>
                  </div>

                  <div>
                    <span>Delivery Address</span>
                    <strong>
                      {order.customer?.address || "—"}
                    </strong>
                  </div>

                </div>

              </div>

              {/* PRODUCTS */}

              <div className="order-products">

                <div className="products-heading">
                  <h3>Order Items</h3>

                  <span>
                    {order.items.length} item
                    {order.items.length !== 1 ? "s" : ""}
                  </span>
                </div>

                <div className="order-items-list">

                  {order.items.map((item, index) => (

                    <div
                      className="order-item"
                      key={item._id || index}
                    >

                      <div className="order-item-image">

                        {item.image ? (
                          <img
                            src={getImageUrl(item.image)}
                            alt={item.name}
                          />
                        ) : (
                          <span>♡</span>
                        )}

                      </div>

                      <div className="item-info">

                        <h4>{item.name}</h4>

                        <p>
                          Quantity: {item.quantity}
                        </p>

                        <span>
                          ₹
                          {Number(
                            item.price
                          ).toLocaleString("en-IN")}
                        </span>

                      </div>

                      <strong className="item-total">
                        ₹
                        {(
                          Number(item.price) *
                          Number(item.quantity)
                        ).toLocaleString("en-IN")}
                      </strong>

                    </div>

                  ))}

                </div>

              </div>

              {/* FOOTER */}

              <div className="order-footer">

                <div className="order-total">

                  <span>Total Amount</span>

                  <strong>
                    ₹
                    {Number(
                      order.totalAmount
                    ).toLocaleString("en-IN")}
                  </strong>

                </div>

                <div className="order-status-control">

                  <label>
                    Update Status
                  </label>

                  <select
                    value={order.status}
                    onChange={(e) =>
                      changeStatus(
                        order._id,
                        e.target.value
                      )
                    }
                  >
                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Confirmed">
                      Confirmed
                    </option>

                    <option value="Shipped">
                      Shipped
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>
                  </select>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default AdminOrders;