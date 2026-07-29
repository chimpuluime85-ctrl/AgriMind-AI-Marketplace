const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getMyProducts,
} = require("../controllers/productController");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("FARMER"),
  createProduct
);

router.get(
  "/",
  getProducts
);

router.get(
  "/my-products",
  authMiddleware,
  roleMiddleware("FARMER"),
  getMyProducts
);

router.get(
  "/:id",
  getProductById
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("FARMER"),
  updateProduct
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("FARMER"),
  deleteProduct
);

module.exports = router;