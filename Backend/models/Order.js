// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema(
//   {
//     user: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "User",
//   required: true,
// },

//     items: [
//       {
//         product: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "Product",
//           required: true,
//         },

//         name: {
//           type: String,
//           required: true,
//         },

//         price: {
//           type: Number,
//           required: true,
//         },

//         quantity: {
//           type: Number,
//           required: true,
//           min: 1,
//         },

//         image: {
//           type: String,
//         },
//       },
//     ],

//     totalAmount: {
//       type: Number,
//       required: true,
//       min: 0,
//     },

//     customer: {
//       name: {
//         type: String,
//         required: true,
//         trim: true,
//       },

//       email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//       },

//       phone: {
//         type: String,
//         required: true,
//         trim: true,
//       },

//       address: {
//         type: String,
//         required: true,
//         trim: true,
//       },
//     },

//     status: {
//       type: String,
//       enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"],
//       default: "Pending",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("Order", orderSchema);


const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    // User who placed the order
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Products in the order
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },

        name: {
          type: String,
          required: true,
          trim: true,
        },

        price: {
          type: Number,
          required: true,
          min: 0,
        },

        quantity: {
          type: Number,
          required: true,
          min: 1,
          validate: {
            validator: Number.isInteger,
            message: "Quantity must be a whole number",
          },
        },

        image: {
          type: String,
          default: "",
        },
      },
    ],

    // Total order amount
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    // Customer/shipping information
    customer: {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },

      phone: {
        type: String,
        required: true,
        trim: true,
      },

      address: {
        type: String,
        required: true,
        trim: true,
      },
    },

    // Order status
    status: {
      type: String,
      enum: [
        "Pending",
        "Confirmed",
        "Shipped",
        "Delivered",
        "Cancelled",
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
