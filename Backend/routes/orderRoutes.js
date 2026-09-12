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

// =====================================
// CREATE ORDER
// Logged-in users only
// =====================================

router.post("/", protect, createOrder);

// =====================================
// GET ALL ORDERS
// Admin only
// =====================================

router.get("/", protect, admin, getOrders);

// =====================================
// GET MY ORDERS
// Logged-in user
// =====================================

router.get("/my-orders", protect, getMyOrders);

// =====================================
// GET SINGLE ORDER
// Owner or admin
// =====================================

router.get("/:id", protect, getOrderById);

// =====================================
// UPDATE ORDER STATUS
// Admin only
// =====================================

router.put("/:id", protect, admin, updateOrderStatus);

module.exports = router;
