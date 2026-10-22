import { useEffect, useState } from "react";
import { getMyOrders } from "../services/api";
import { Link } from "react-router-dom";
import "./MyOrders.css";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      if (!user?._id) {
        setError("Please login to view your orders.");
        setLoading(false);
        return;
      }

      const data = await getMyOrders();
      setOrders(data || []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load your orders.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusStep = (status) => {
    switch (status) {
      case "Pending":
        return 1;
      case "Confirmed":
        return 2;
      case "Shipped":
        return 3;
      case "Delivered":
        return 4;
      default:
        return 0;
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="orders-page">
        <div className="orders-loading">
          <div className="loading-circle"></div>
          <h2>Loading your orders...</h2>
          <p>Please wait a moment.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="orders-page">
        <div className="orders-error">
          <div className="error-icon">!</div>
          <h2>Unable to load orders</h2>
          <p>{error}</p>

          <button
            className="retry-orders-btn"
            onClick={() => {
              setLoading(true);
              setError("");
              loadOrders();
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">

      {/* PAGE HEADER */}
      <div className="orders-header">
        <span className="orders-eyebrow">
          YOUR ACCOUNT
        </span>

        <h1>My Orders</h1>

        <p>
          Track and manage your jewellery orders.
        </p>
      </div>

      {/* EMPTY STATE */}
      {orders.length === 0 ? (
        <div className="no-orders">

          <div className="no-orders-icon">
            ♡
          </div>

          <h2>No Orders Yet</h2>

          <p>
            You haven't placed an order yet.
            Discover something beautiful from our collection.
          </p>

          <Link
            to="/collection"
            className="shop-orders-btn"
          >
            Explore Collection
          </Link>

        </div>
      ) : (

        <div className="orders-list">

          {orders.map((order) => {

            const currentStep = getStatusStep(order.status);

            return (
              <div
                className="customer-order-card"
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
                      Placed on {formatDate(order.createdAt)}
                    </p>
                  </div>

                  <div
                    className={`order-status ${order.status.toLowerCase()}`}
                  >
                    <span className="status-dot"></span>
                    {order.status}
                  </div>

                </div>

                {/* TRACKING */}
                {order.status !== "Cancelled" && (
                  <div className="order-tracking">

                    {[
                      "Pending",
                      "Confirmed",
                      "Shipped",
                      "Delivered",
                    ].map((status, index) => {

                      const step = index + 1;

                      return (
                        <div
                          className={`tracking-step ${
                            step <= currentStep
                              ? "active"
                              : ""
                          }`}
                          key={status}
                        >

                          <div className="tracking-circle">
                            {step <= currentStep ? "✓" : step}
                          </div>

                          <span>{status}</span>

                        </div>
                      );
                    })}

                  </div>
                )}

                {/* CANCELLED MESSAGE */}
                {order.status === "Cancelled" && (
                  <div className="cancelled-message">
                    <span>×</span>

                    <div>
                      <strong>Order Cancelled</strong>
                      <p>
                        This order is no longer being processed.
                      </p>
                    </div>
                  </div>
                )}

                {/* PRODUCTS */}
                <div className="ordered-products">

                  <div className="products-heading">
                    <h3>Order Items</h3>

                    <span>
                      {order.items.length} item
                      {order.items.length !== 1
                        ? "s"
                        : ""}
                    </span>
                  </div>

                  <div className="ordered-products-list">

                    {order.items.map((item, index) => {

                      const imageUrl =
                        item.image?.startsWith("http")
                          ? item.image
                          : `http://localhost:5000${item.image}`;

                      return (
                        <div
                          className="ordered-product"
                          key={index}
                        >

                          <div className="ordered-product-image">
                            {item.image ? (
                              <img
                                src={imageUrl}
                                alt={item.name}
                              />
                            ) : (
                              <span>♡</span>
                            )}
                          </div>

                          <div className="product-info">
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
                              item.quantity
                            ).toLocaleString("en-IN")}
                          </strong>

                        </div>
                      );
                    })}

                  </div>

                </div>

                {/* FOOTER */}
                <div className="order-footer">

                  <div>
                    <span>Total Amount</span>

                    <strong>
                      ₹
                      {Number(
                        order.totalAmount
                      ).toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <div className="order-delivery">
                    <span>Delivery</span>
                    <strong>FREE</strong>
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}

export default MyOrders;