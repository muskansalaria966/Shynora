import { Link, useParams } from "react-router-dom";

function OrderSuccess() {
  const { id } = useParams();

  return (
    <div className="order-success">
      <h1>🎉 Order Placed Successfully!</h1>

      <p>Your Order ID:</p>
      <h2>{id}</h2>

      <Link to="/collection">
        Continue Shopping
      </Link>
    </div>
  );
}

export default OrderSuccess;