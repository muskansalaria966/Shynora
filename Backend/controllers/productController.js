
const mongoose = require("mongoose");
const Product = require("../models/Product");
const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = async (file) => {
  if (!file) return "";

  const base64 = file.buffer.toString("base64");

  const dataUri = `data:${file.mimetype};base64,${base64}`;

  const result = await cloudinary.uploader.upload(dataUri, {
    folder: "shynora/products",
    resource_type: "image",
  });

  return result.secure_url;
};

// =====================================
// GET ALL PRODUCTS / FILTER BY CATEGORY
// =====================================

const getProducts = async (req, res) => {
  try {
    const { category } = req.query;

    const filter = {};

    if (category && category.trim()) {
      filter.category = category.trim();
    }

    const products = await Product.find(filter).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Get products error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};

// =====================================
// GET SINGLE PRODUCT
// =====================================

const getProductById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Get product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch product",
    });
  }
};

// =====================================
// CREATE PRODUCT - ADMIN
// =====================================

const createProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      price,
      description,
      stock,
      subcategory,
      material,
      featured,
    } = req.body;

    if (!name || !category || price === undefined) {
      return res.status(400).json({
        success: false,
        message: "Name, category and price are required",
      });
    }

    const numericPrice = Number(price);
    const numericStock =
      stock === undefined ? 0 : Number(stock);

    if (!Number.isFinite(numericPrice) || numericPrice < 0) {
      return res.status(400).json({
        success: false,
        message: "Price must be a valid non-negative number",
      });
    }

    if (!Number.isInteger(numericStock) || numericStock < 0) {
      return res.status(400).json({
        success: false,
        message: "Stock must be a non-negative integer",
      });
    }

    // const image = req.file
    //   ? `/uploads/${req.file.filename}`
    //   : "";
    const image = await uploadToCloudinary(req.file);

    const product = await Product.create({
      name: name.trim(),
      category: category.trim(),
      subcategory: subcategory
        ? subcategory.trim()
        : "",
      price: numericPrice,
      image,
      description: description
        ? description.trim()
        : "",
      material: material
        ? material.trim()
        : "Gold",
      stock: numericStock,
      featured:
        featured === true || featured === "true",
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Create product error:", error);

    return res.status(400).json({
      success: false,
      message: "Failed to create product",
    });
  }
};

// =====================================
// UPDATE PRODUCT - ADMIN
// =====================================

const updateProduct = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const {
      name,
      category,
      price,
      description,
      stock,
      subcategory,
      material,
      featured,
    } = req.body;

    // Name
    if (name !== undefined) {
      if (!String(name).trim()) {
        return res.status(400).json({
          success: false,
          message: "Product name cannot be empty",
        });
      }

      product.name = String(name).trim();
    }

    // Category
    if (category !== undefined) {
      if (!String(category).trim()) {
        return res.status(400).json({
          success: false,
          message: "Category cannot be empty",
        });
      }

      product.category = String(category).trim();
    }

    // Subcategory
    if (subcategory !== undefined) {
      product.subcategory =
        String(subcategory).trim();
    }

    // Description
    if (description !== undefined) {
      product.description =
        String(description).trim();
    }

    // Material
    if (material !== undefined) {
      product.material =
        String(material).trim();
    }

    // Price
    if (price !== undefined) {
      const numericPrice = Number(price);

      if (
        !Number.isFinite(numericPrice) ||
        numericPrice < 0
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Price must be a valid non-negative number",
        });
      }

      product.price = numericPrice;
    }

    // Stock
    if (stock !== undefined) {
      const numericStock = Number(stock);

      if (
        !Number.isInteger(numericStock) ||
        numericStock < 0
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Stock must be a non-negative integer",
        });
      }

      product.stock = numericStock;
    }

    // Featured
    if (featured !== undefined) {
      product.featured =
        featured === true || featured === "true";
    }

    // Image
    // if (req.file) {
    //   product.image =
    //     `/uploads/${req.file.filename}`;
    // }

    if (req.file) {
  product.image = await uploadToCloudinary(req.file);
}

    await product.save();

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Update product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update product",
    });
  }
};

// =====================================
// DELETE PRODUCT - ADMIN
// =====================================

// const deleteProduct = async (req, res) => {
//   try {
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid product ID",
//       });
//     }

//     const product = await Product.findByIdAndDelete(
//       req.params.id
//     );

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Product deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete product error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete product",
//     });
//   }
// };
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Delete product error:", error);

    res.status(500).json({
      message: "Failed to delete product",
    });
  }
};
// =====================================
// ADD REVIEW - AUTHENTICATED USER
// =====================================

const addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    if (rating === undefined || !comment) {
      return res.status(400).json({
        success: false,
        message:
          "Rating and comment are required",
      });
    }

    const numericRating = Number(rating);

    if (
      !Number.isInteger(numericRating) ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Rating must be an integer between 1 and 5",
      });
    }

    if (
      typeof comment !== "string" ||
      !comment.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Review comment is required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const product = await Product.findById(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const alreadyReviewed =
      product.reviews.some(
        (review) =>
          review.user &&
          review.user.toString() ===
            req.user._id.toString()
      );

    if (alreadyReviewed) {
      return res.status(400).json({
        success: false,
        message:
          "You already reviewed this product",
      });
    }

    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: numericRating,
      comment: comment.trim(),
    };

    product.reviews.push(review);

    product.numReviews =
      product.reviews.length;

    product.averageRating =
      product.reviews.reduce(
        (sum, review) =>
          sum + review.rating,
        0
      ) / product.reviews.length;

    await product.save();

    return res.status(201).json({
      success: true,
      message:
        "Review added successfully",
      product,
    });
  } catch (error) {
    console.error("Add review error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to add review",
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  addReview,
};

