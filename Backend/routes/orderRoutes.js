// const express = require("express");

// const {
//   createOrder,
//   getOrders,
//   getOrderById,
//   getMyOrders,
//   updateOrderStatus,
// } = require("../controllers/orderController");

// const router = express.Router();

// router.post("/", createOrder);

// router.get("/", getOrders);
// router.get("/user/:userId", getMyOrders);

// router.get("/:id", getOrderById);


// router.put("/:id", updateOrderStatus);

// module.exports = router;

// const express = require("express");

// const {
//   createOrder,
//   getOrders,
//   getOrderById,
//   getMyOrders,
//   updateOrderStatus,
// } = require("../controllers/orderController");

// const { protect, admin } = require("../middleware/authMiddleware");

// const router = express.Router();

// // Create an order - logged-in users only
// router.post("/", protect, createOrder);

// // Get all orders - admin only
// router.get("/", protect, admin, getOrders);

// // Get current user's orders - logged-in users only
// router.get("/my-orders", protect, getMyOrders);

// // Get a specific order - logged-in users
// router.get("/:id", protect, getOrderById);

// // Update order status - admin only
// router.put("/:id", protect, admin, updateOrderStatus);

// module.exports = router;


const express = require("express");

const {
  protect,
  admin,
} = require("../middleware/authMiddleware");

const {
  createOrder,
  getOrders,
  getOrderById,
  getMyOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/", protect, createOrder);

router.get("/", protect, admin, getOrders);

router.get("/my-orders", protect, getMyOrders);

router.get("/:id", protect, getOrderById);

router.put("/:id", protect, admin, updateOrderStatus);

module.exports = router;
