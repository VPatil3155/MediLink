const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    wholesaler: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
    ,
    // isActive: {
    //   type: Boolean,
    //   default: true
    // }
  },
  { timestamps: true }
  
);

module.exports = mongoose.model("Medicine", medicineSchema);
