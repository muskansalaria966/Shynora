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

// const path = require("path");
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Static uploads
// app.use(
//   "/uploads",
//   express.static(path.join(__dirname, "uploads"))
// );

// // Test route
// app.get("/", (req, res) => {
//   res.json({
//     message: "Shynora Jewels Backend is running!"
//   });
// });

// // Routes
// app.use(
//   "/api/products",
//   require("./routes/productRoutes")
// );

// app.use(
//   "/api/orders",
//   require("./routes/orderRoutes")
// );

// app.use(
//   "/api/auth",
//   require("./routes/authRoutes")
// );

// // Export app for Vercel
// module.exports = app;

// const dns = require("dns");

// dns.setServers([
//   "8.8.8.8",
//   "8.8.4.4"
// ]);

// const path = require("path");
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const connectDB = require("./config/db");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Static uploads
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Test route
// app.get("/", (req, res) => {
//   res.json({
//     message: "Shynora Jewels Backend is running!"
//   });
// });

// // API routes
// app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/orders", require("./routes/orderRoutes"));
// app.use("/api/auth", require("./routes/authRoutes"));

// // Vercel handler
// // const handler = async (req, res) => {
// //   try {
// //     await connectDB();
// //     return app(req, res);
// //   } catch (error) {
// //     console.error("Server error:", error);

// //     return res.status(500).json({
// //       success: false,
// //       message: "Server error"
// //     });
// //   }
// // };

// // module.exports = app;

// const PORT = process.env.PORT || 5000;

// // if (process.env.NODE_ENV !== "production") {
// //   app.listen(PORT, () => {
// //     console.log(`Server running on http://localhost:${PORT}`);
// //   });
// // }

// // module.exports = app;
// const startServer = async () => {
//   try {
//     await connectDB();

//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };

// if (process.env.NODE_ENV !== "production") {
//   startServer();
// }

// module.exports = app;

// const dns = require("dns");

// dns.setServers([
//   "8.8.8.8",
//   "8.8.4.4"
// ]);

// const path = require("path");
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const connectDB = require("./config/db");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Static uploads
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Test route
// app.get("/", (req, res) => {
//   res.json({
//     message: "Shynora Jewels Backend is running!"
//   });
// });

// // API routes
// app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/orders", require("./routes/orderRoutes"));
// app.use("/api/auth", require("./routes/authRoutes"));

// // Connect MongoDB before handling requests
// let dbConnected = false;

// const ensureDB = async () => {
//   if (!dbConnected) {
//     await connectDB();
//     dbConnected = true;
//   }
// };

// // Vercel serverless handler
// module.exports = async (req, res) => {
//   try {
//     await ensureDB();
//     return app(req, res);
//   } catch (error) {
//     console.error("Server error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message
//     });
//   }
// };

// const dns = require("dns");

// dns.setServers([
//   "8.8.8.8",
//   "8.8.4.4"
// ]);

// const path = require("path");
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Static uploads
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Test route
// app.get("/", (req, res) => {
//   res.json({
//     message: "Shynora Jewels Backend is running!"
//   });
// });

// // API routes
// app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/orders", require("./routes/orderRoutes"));
// app.use("/api/auth", require("./routes/authRoutes"));

// // Export Express app for Vercel
// module.exports = app;

const dns = require("dns");

dns.setServers([
  "8.8.8.8",
  "8.8.4.4"
]);

const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.json({
    message: "Shynora Jewels Backend is running!"
  });
});

app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

module.exports = app;