const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    retailer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    wholesaler: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    medicine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medicine",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
