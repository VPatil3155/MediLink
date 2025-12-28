import { useState } from "react";
import { addMedicine } from "../../api/medicine";
import Layout from "../../components/Layout";

export default function AddMedicine() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMedicine(form);
    alert("Medicine added");
  };

  return (
    <Layout role="wholesaler">
      <h2>Add Medicine</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Medicine name"
          onChange={handleChange}
        />
        <br />

        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />
        <br />

        <input
          name="stock"
          placeholder="Stock"
          onChange={handleChange}
        />
        <br />

        <button type="submit">Add</button>
      </form>
    </Layout>
  );
}
