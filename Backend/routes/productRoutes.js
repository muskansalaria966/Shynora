const express = require("express");
const upload = require("../middleware/upload");
const {
  protect,
  admin,
} = require("../middleware/authMiddleware");

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  addReview,
} = require("../controllers/productController");

const router = express.Router();


// GET all products
router.get("/", getProducts);


// GET one product
router.get("/:id", getProductById);


// CREATE product
router.post("/",protect,admin,upload.single("image"), createProduct);


// UPDATE product
router.put("/:id",protect,admin, upload.single("image"), updateProduct);


// DELETE product
router.delete("/:id",protect,admin, deleteProduct);

router.post("/:id/review",protect, addReview);


module.exports = router;