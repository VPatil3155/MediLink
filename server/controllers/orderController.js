const Order = require("../models/Order");
const Medicine = require("../models/Medicine");

exports.placeOrder = async (req, res) => {
  try {
    const { medicineId, quantity } = req.body;

    if (!medicineId || !quantity) {
      return res.status(400).json({ message: "Missing data" });
    }

    const medicine = await Medicine.findById(medicineId);
    if (!medicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }

    const order = await Order.create({
      retailer: req.user.id,
      wholesaler: medicine.wholesaler,
      medicine: medicine._id,
      quantity,
    });

    res.status(201).json(order);
  } catch (error) {
  console.error("ORDER ERROR 👉", error);
  res.status(500).json({
    message: "Order failed",
    error: error.message
  });
}

};
exports.getWholesalerOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      wholesaler: req.user.id,
    })
      .populate("medicine", "name price")
      .populate("retailer", "name email");

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const orderId = req.params.id;

    if (!["accepted", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    // if (medicine.stock === 0) {
    //   medicine.isActive = false;
    // }
    // await medicine.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Failed to update order" });
  }
};

