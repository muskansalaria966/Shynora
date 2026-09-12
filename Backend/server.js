// const dns = require("dns");

// dns.setServers([
//   "8.8.8.8",
//   "8.8.4.4"
// ]);
// const path = require("path");
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// const connectDB = require("./config/db");

// dotenv.config();

// const app = express();

// // Connect MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Test route
// app.get("/", (req, res) => {
//   res.json({
//     message: "Shynora Jewels Backend is running!"
//   });
// });

// // Product routes
// app.use("/api/products", require("./routes/productRoutes"));
// const orderRoutes = require("./routes/orderRoutes");
// const authRoutes = require("./routes/authRoutes");
// app.use("/api/orders", orderRoutes);
// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static uploads
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Shynora Jewels Backend is running!"
  });
});

// Routes
app.use(
  "/api/products",
  require("./routes/productRoutes")
);

app.use(
  "/api/orders",
  require("./routes/orderRoutes")
);

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

// Export app for Vercel
module.exports = app;