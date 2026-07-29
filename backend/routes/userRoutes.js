const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getProfile,
  updateProfile,
  changePassword,
  getSettings,
  updateSettings,
} = require("../controllers/userController");

router.get(
  "/profile",
  authMiddleware,
  getProfile
);

router.put(
  "/profile",
  authMiddleware,
  updateProfile
);

router.put(
  "/change-password",
  authMiddleware,
  changePassword
);

router.get(
  "/settings",
  authMiddleware,
  getSettings
);

router.put(
  "/settings",
  authMiddleware,
  updateSettings
);

module.exports = router;
