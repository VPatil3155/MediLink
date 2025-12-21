const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");


const authRoutes = require("./routes/authRoutes");
const medicineRoutes = require("./routes/medicineRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/orders", orderRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));
