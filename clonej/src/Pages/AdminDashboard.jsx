import { useEffect, useState } from "react";
import { getOrders, updateOrderStatus } from "../services/api";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
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
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const changeStatus = async (id, status) => {
    try {
      await updateOrderStatus(id, status);
      loadOrders();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to update order");
    }
  };

  const totalRevenue = orders
    .filter((order) => order.status !== "Cancelled")
    .reduce(
      (sum, order) => sum + Number(order.totalAmount || 0),
      0
    );

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  return (
    <div className="admin-dashboard">

      {/* HEADER */}
      <div className="admin-header">
        <div>
          <span className="admin-eyebrow">
            JEWELS ADMIN
          </span>

          <h1>Dashboard</h1>

          <p>
            Manage your jewellery store and customer orders.
          </p>
        </div>

        <Link
          to="/admin/products"
          className="manage-products-btn"
        >
          Manage Products →
        </Link>
      </div>

      {/* STATS */}
      <div className="admin-stats">

        <div className="admin-stat-card">
          <div className="stat-icon">₹</div>

          <div>
            <span>Total Revenue</span>
            <strong>
              ₹{totalRevenue.toLocaleString("en-IN")}
            </strong>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-icon">📦</div>

          <div>
            <span>Total Orders</span>
            <strong>{orders.length}</strong>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-icon">⏳</div>

          <div>
            <span>Pending Orders</span>
            <strong>{pendingOrders}</strong>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-icon">✓</div>

          <div>
            <span>Delivered</span>
            <strong>{deliveredOrders}</strong>
          </div>
        </div>

      </div>

      {/* ORDERS */}
      <div className="admin-orders-section">

        <div className="section-top">

          <div>
            <span>ORDER MANAGEMENT</span>
            <h2>Recent Orders</h2>
          </div>

          <Link to="/admin/orders">
            View All Orders →
          </Link>

        </div>

        {loading ? (
          <div className="admin-loading">
            <div className="admin-spinner"></div>
            <p>Loading orders...</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="admin-empty">
            <div>📦</div>
            <h3>No orders yet</h3>
            <p>
              Customer orders will appear here.
            </p>
          </div>
        ) : (
          <div className="admin-table-wrapper">

            <table className="admin-orders-table">

              <thead>
                <tr>
                  <th>Order</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Update</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (

                  <tr key={order._id}>

                    <td>
                      <span className="order-id">
                        #{order._id.slice(-6).toUpperCase()}
                      </span>
                    </td>

                    <td>
                      <div className="customer-cell">
                        <strong>
                          {order.customer?.name || "Customer"}
                        </strong>

                        <span>
                          {order.customer?.email || ""}
                        </span>
                      </div>
                    </td>

                    <td>
                      <strong className="amount">
                        ₹
                        {Number(
                          order.totalAmount || 0
                        ).toLocaleString("en-IN")}
                      </strong>
                    </td>

                    <td>
                      <span
                        className={`admin-status ${order.status.toLowerCase()}`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td>
                      <span className="order-date">
                        {new Date(
                          order.createdAt
                        ).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </td>

                    <td>
                      <select
                        className="status-select"
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
                    </td>

                  </tr>

                ))}
              </tbody>

            </table>

          </div>
        )}

      </div>

      {/* QUICK ACTIONS */}
      <div className="quick-actions">

        <div>
          <span>QUICK ACTIONS</span>
          <h2>Store Management</h2>
        </div>

        <div className="quick-action-grid">

          <Link
            to="/admin/products"
            className="quick-action"
          >
            <div className="quick-icon">💎</div>

            <div>
              <strong>Manage Products</strong>
              <p>Add, edit or remove products</p>
            </div>

            <span>→</span>
          </Link>

          <Link
            to="/admin/orders"
            className="quick-action"
          >
            <div className="quick-icon">📦</div>

            <div>
              <strong>Manage Orders</strong>
              <p>View and update customer orders</p>
            </div>

            <span>→</span>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;