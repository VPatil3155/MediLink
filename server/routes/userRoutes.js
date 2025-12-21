const express = require("express");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

const router = express.Router();

/* Protected user route */
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Protected profile route",
    user: req.user,
  });
});

/* Admin-only route */
router.get(
  "/admin/dashboard",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin" });
  }
);

module.exports = router;
