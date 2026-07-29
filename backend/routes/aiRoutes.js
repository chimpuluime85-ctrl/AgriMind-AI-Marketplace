const express = require("express");

const router = express.Router();

const {
  getAIAdvice,
} = require("../controllers/aiController");

router.post(
  "/chat",
  getAIAdvice
);

module.exports = router;