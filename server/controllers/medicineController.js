const Medicine = require("../models/Medicine");

// Wholesaler adds a medicine
const addMedicine = async (req, res) => {
  try {
    const { name, price, stock } = req.body;

    if (req.user.role !== "wholesaler") {
      return res.status(403).json({ message: "Access denied" });
    }

    const medicine = await Medicine.create({
      name,
      price,
      stock,
      wholesaler: req.user.id,
    });

    res.status(201).json(medicine);
  } catch (error) {
    res.status(500).json({ message: "Failed to add medicine" });
  }
};
const getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine
      .find()
      .populate("wholesaler", "name email");

    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch medicines" });
  }
};
module.exports = { addMedicine, getAllMedicines };
