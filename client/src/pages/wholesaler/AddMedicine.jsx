import { useState } from "react";
import Layout from "../../components/Layout";
import { addMedicine } from "../../api/medicine";
import "./addMedicine.css";

export default function AddMedicine() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.stock) {
      setMessage("All fields are required");
      return;
    }

    try {
      await addMedicine(form);
      setMessage("Medicine added successfully");
      setForm({ name: "", price: "", stock: "" });
    } catch (error) {
      setMessage("Failed to add medicine");
    }
  };

  return (
    <Layout>
      <div className="page">
        <h2 className="page-title">Add Medicine</h2>

        <form className="form-card" onSubmit={handleSubmit}>
          <label>Medicine Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Paracetamol"
          />

          <label>Price (₹)</label>
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            placeholder="20"
          />

          <label>Stock</label>
          <input
            name="stock"
            type="number"
            value={form.stock}
            onChange={handleChange}
            placeholder="100"
          />

          <button type="submit">Add Medicine</button>

          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </Layout>
  );
}
