const express = require("express");

const {
  getAllMedicines,
  addMedicine,
} = require("../controllers/medicineController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getAllMedicines);
router.post("/", protect, addMedicine);

module.exports = router;
