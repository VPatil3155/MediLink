const express = require("express");
const { placeOrder } = require("../controllers/orderController");
const {protect} = require("../middleware/authMiddleware");

const router = express.Router();
const { getWholesalerOrders } = require("../controllers/orderController");
const { updateOrderStatus } = require("../controllers/orderController");

router.patch("/:id/status", protect, updateOrderStatus);


router.get("/wholesaler", protect, getWholesalerOrders);

router.post("/", protect, placeOrder);

module.exports = router;
