const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get(
"/dashboard",
authMiddleware,
roleMiddleware("FARMER"),
(req, res) => {
res.json({
success: true,
message: "Welcome Farmer",
user: req.user,
});
}
);

module.exports = router;
