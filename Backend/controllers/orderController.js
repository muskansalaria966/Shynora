// const Order = require("../models/Order");
// const Product = require("../models/Product");

// const createOrder = async (req, res) => {
//   try {
//     const { user, items, totalAmount, customer } = req.body;

//     // Check stock for every item
//     for (const item of items) {
//       const product = await Product.findById(item.product);

//       if (!product) {
//         return res.status(404).json({
//           message: `${item.name} not found`,
//         });
//       }

//       if (product.stock < item.quantity) {
//         return res.status(400).json({
//           message: `${product.name} has only ${product.stock} items left`,
//         });
//       }
//     }

//     // Reduce stock
//     for (const item of items) {
//       const product = await Product.findById(item.product);

//       product.stock -= item.quantity;

//       await product.save();
//     }

//     // Create order
//     const order = await Order.create({
//       user,
//       items,
//       totalAmount,
//       customer,
//     });

//     res.status(201).json(order);

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: "Failed to create order",
//     });
//   }
// };

// // Get all orders
// const getOrders = async (req, res) => {
//   try {
//     const orders = await Order.find()
//       .populate("items.product")
//       .sort({ createdAt: -1 });

//     res.json(orders);
//   } catch (error) {
//     console.error("Get orders error:", error);
//     res.status(500).json({
//       message: "Failed to fetch orders",
//     });
//   }
// };

// // Get one order
// const getOrderById = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id)
//       .populate("items.product");

//     if (!order) {
//       return res.status(404).json({
//         message: "Order not found",
//       });
//     }

//     res.json(order);
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to fetch order",
//     });
//   }
// };

// // Get logged-in user's orders
// const getMyOrders = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const orders = await Order.find({ user: userId })
//       .sort({ createdAt: -1 });

//     res.json(orders);

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: "Failed to fetch orders",
//     });
//   }
// };


// const updateOrderStatus = async (req, res) => {
//   try {
//     const { status } = req.body;

//     const order = await Order.findById(req.params.id);

//     if (!order) {
//       return res.status(404).json({
//         message: "Order not found",
//       });
//     }

//     // Prevent changing an already cancelled order
//     if (order.status === "Cancelled") {
//       return res.status(400).json({
//         message: "Cancelled order cannot be updated",
//       });
//     }

//     // If order is being cancelled
//     if (status === "Cancelled") {

//       // Restore stock for every product
//       for (const item of order.items) {

//         const product = await Product.findById(item.product);

//         if (product) {
//           product.stock += item.quantity;

//           await product.save();
//         }
//       }
//     }

//     order.status = status;

//     await order.save();

//     res.json(order);

//   } catch (error) {
//     console.error("Update order status error:", error);

//     res.status(500).json({
//       message: "Failed to update order status",
//     });
//   }
// };

// module.exports = {
//   createOrder,
//   getOrders,
//   getOrderById,
//   getMyOrders,
//   updateOrderStatus,
// };

// const mongoose = require("mongoose");
// const Order = require("../models/Order");
// const Product = require("../models/Product");

// // Create order
// const createOrder = async (req, res) => {
//   try {
//     const { items, customer } = req.body;

//     // Validate items
//     if (!Array.isArray(items) || items.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Order must contain at least one item",
//       });
//     }

//     // Validate customer information
//     if (
//       !customer ||
//       !customer.name ||
//       !customer.email ||
//       !customer.phone ||
//       !customer.address
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Complete customer information is required",
//       });
//     }

//     const orderItems = [];
//     let totalAmount = 0;

//     // Validate products, prices and stock
//     for (const item of items) {
//       if (!item.product || !mongoose.Types.ObjectId.isValid(item.product)) {
//         return res.status(400).json({
//           success: false,
//           message: "Invalid product ID",
//         });
//       }

//       const quantity = Number(item.quantity);

//       if (!Number.isInteger(quantity) || quantity < 1) {
//         return res.status(400).json({
//           success: false,
//           message: "Invalid product quantity",
//         });
//       }

//       const product = await Product.findById(item.product);

//       if (!product) {
//         return res.status(404).json({
//           success: false,
//           message: "Product not found",
//         });
//       }

//       if (product.stock < quantity) {
//         return res.status(400).json({
//           success: false,
//           message: `${product.name} has only ${product.stock} items left`,
//         });
//       }

//       // Use price from database, NOT frontend
//       const itemTotal = product.price * quantity;

//       totalAmount += itemTotal;

//       orderItems.push({
//         product: product._id,
//         name: product.name,
//         price: product.price,
//         quantity,
//         image: product.image,
//       });
//     }

//     // Reduce stock
//     for (const item of orderItems) {
//       const product = await Product.findById(item.product);

//       if (!product) {
//         return res.status(404).json({
//           success: false,
//           message: `${item.name} is no longer available`,
//         });
//       }

//       if (product.stock < item.quantity) {
//         return res.status(400).json({
//           success: false,
//           message: `${product.name} is no longer available in the requested quantity`,
//         });
//       }

//       product.stock -= item.quantity;
//       await product.save();
//     }

//     // Create order using authenticated user
//     const order = await Order.create({
//       user: req.user._id,
//       items: orderItems,
//       totalAmount,
//       customer: {
//         name: customer.name.trim(),
//         email: customer.email.trim().toLowerCase(),
//         phone: customer.phone.trim(),
//         address: customer.address.trim(),
//       },
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Order created successfully",
//       order,
//     });
//   } catch (error) {
//     console.error("Create order error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to create order",
//     });
//   }
// };

// // Get all orders - Admin
// const getOrders = async (req, res) => {
//   try {
//     const orders = await Order.find()
//       .populate("items.product")
//       .sort({ createdAt: -1 });

//     return res.json({
//       success: true,
//       orders,
//     });
//   } catch (error) {
//     console.error("Get orders error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch orders",
//     });
//   }
// };

// // Get one order
// const getOrderById = async (req, res) => {
//   try {
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid order ID",
//       });
//     }

//     const order = await Order.findById(req.params.id)
//       .populate("items.product");

//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         message: "Order not found",
//       });
//     }

//     // Admin can view any order
//     const isAdmin = req.user.role === "admin";

//     // Customer can only view their own order
//     const isOwner = order.user.toString() === req.user._id.toString();

//     if (!isAdmin && !isOwner) {
//       return res.status(403).json({
//         success: false,
//         message: "You are not authorized to view this order",
//       });
//     }

//     return res.json({
//       success: true,
//       order,
//     });
//   } catch (error) {
//     console.error("Get order error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch order",
//     });
//   }
// };

// // Get logged-in user's orders
// const getMyOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({
//       user: req.user._id,
//     })
//       .populate("items.product")
//       .sort({ createdAt: -1 });

//     return res.json({
//       success: true,
//       orders,
//     });
//   } catch (error) {
//     console.error("Get my orders error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch orders",
//     });
//   }
// };

// // Update order status - Admin
// const updateOrderStatus = async (req, res) => {
//   try {
//     const { status } = req.body;

//     const allowedStatuses = [
//       "Pending",
//       "Confirmed",
//       "Shipped",
//       "Delivered",
//       "Cancelled",
//     ];

//     if (!allowedStatuses.includes(status)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid order status",
//       });
//     }

//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid order ID",
//       });
//     }

//     const order = await Order.findById(req.params.id);

//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         message: "Order not found",
//       });
//     }

//     // Prevent changes to cancelled orders
//     if (order.status === "Cancelled") {
//       return res.status(400).json({
//         success: false,
//         message: "Cancelled order cannot be updated",
//       });
//     }

//     // Prevent cancelling an already delivered order
//     if (order.status === "Delivered" && status === "Cancelled") {
//       return res.status(400).json({
//         success: false,
//         message: "Delivered order cannot be cancelled",
//       });
//     }

//     // Restore stock only when cancelling
//     if (status === "Cancelled" && order.status !== "Cancelled") {
//       for (const item of order.items) {
//         const product = await Product.findById(item.product);

//         if (product) {
//           product.stock += item.quantity;
//           await product.save();
//         }
//       }
//     }

//     order.status = status;

//     await order.save();

//     return res.json({
//       success: true,
//       message: "Order status updated successfully",
//       order,
//     });
//   } catch (error) {
//     console.error("Update order status error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to update order status",
//     });
//   }
// };

// module.exports = {
//   createOrder,
//   getOrders,
//   getOrderById,
//   getMyOrders,
//   updateOrderStatus,
// };

const mongoose = require("mongoose");
const Order = require("../models/Order");
const Product = require("../models/Product");

// =====================================
// CREATE ORDER
// Logged-in users only
// =====================================

const createOrder = async (req, res) => {
  try {
    const { items, customer } = req.body;

    // Validate items
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Order must contain at least one item",
      });
    }

    // Validate customer information
    if (
      !customer ||
      !customer.name ||
      !customer.email ||
      !customer.phone ||
      !customer.address
    ) {
      return res.status(400).json({
        success: false,
        message: "Complete customer information is required",
      });
    }

    // Validate customer fields
    if (
      typeof customer.name !== "string" ||
      typeof customer.email !== "string" ||
      typeof customer.phone !== "string" ||
      typeof customer.address !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid customer information",
      });
    }

    const orderItems = [];
    let totalAmount = 0;

    // =====================================
    // Validate products
    // =====================================

    for (const item of items) {
      if (
        !item.product ||
        !mongoose.Types.ObjectId.isValid(item.product)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid product ID",
        });
      }

      const quantity = Number(item.quantity);

      if (!Number.isInteger(quantity) || quantity < 1) {
        return res.status(400).json({
          success: false,
          message: "Invalid product quantity",
        });
      }

      const product = await Product.findById(item.product);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      // Use database price
      const itemTotal = product.price * quantity;

      totalAmount += itemTotal;

      orderItems.push({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image,
      });
    }

    // =====================================
    // Reduce stock atomically
    // =====================================

    for (const item of orderItems) {
      const updatedProduct = await Product.findOneAndUpdate(
        {
          _id: item.product,
          stock: { $gte: item.quantity },
        },
        {
          $inc: {
            stock: -item.quantity,
          },
        },
        {
          new: true,
        }
      );

      if (!updatedProduct) {
        return res.status(400).json({
          success: false,
          message: `${item.name} is no longer available in the requested quantity`,
        });
      }
    }

    // =====================================
    // Create order
    // =====================================

    const order = await Order.create({
      user: req.user._id,

      items: orderItems,

      totalAmount,

      customer: {
        name: customer.name.trim(),
        email: customer.email.trim().toLowerCase(),
        phone: customer.phone.trim(),
        address: customer.address.trim(),
      },
    });

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.error("Create order error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create order",
    });
  }
};

// =====================================
// GET ALL ORDERS
// Admin only
// =====================================

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("items.product")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Get orders error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
    });
  }
};

// =====================================
// GET SINGLE ORDER
// Owner or admin
// =====================================

const getOrderById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order ID",
      });
    }

    const order = await Order.findById(req.params.id)
      .populate("items.product");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Admin can view any order
    const isAdmin = req.user.role === "admin";

    // Customer can only view their own order
    const isOwner =
      order.user.toString() === req.user._id.toString();

    if (!isAdmin && !isOwner) {
      return res.status(403).json({
        success: false,
        message:
          "You are not authorized to view this order",
      });
    }

    return res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Get order error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch order",
    });
  }
};

// =====================================
// GET MY ORDERS
// Logged-in user
// =====================================

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    })
      .populate("items.product")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Get my orders error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
    });
  }
};

// =====================================
// UPDATE ORDER STATUS
// Admin only
// =====================================

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "Pending",
      "Confirmed",
      "Shipped",
      "Delivered",
      "Cancelled",
    ];

    // Validate status
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order status",
      });
    }

    // Validate order ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order ID",
      });
    }

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Cannot update cancelled order
    if (order.status === "Cancelled") {
      return res.status(400).json({
        success: false,
        message: "Cancelled order cannot be updated",
      });
    }

    // Delivered order cannot be cancelled
    if (
      order.status === "Delivered" &&
      status === "Cancelled"
    ) {
      return res.status(400).json({
        success: false,
        message: "Delivered order cannot be cancelled",
      });
    }

    // =====================================
    // Cancel order and restore stock
    // =====================================

    if (status === "Cancelled") {
      for (const item of order.items) {
        await Product.findByIdAndUpdate(
          item.product,
          {
            $inc: {
              stock: item.quantity,
            },
          }
        );
      }
    }

    order.status = status;

    await order.save();

    return res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      order,
    });
  } catch (error) {
    console.error(
      "Update order status error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to update order status",
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  getMyOrders,
  updateOrderStatus,
};

