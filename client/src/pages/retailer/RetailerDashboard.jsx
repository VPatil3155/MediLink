import { useEffect, useState } from "react";
import { getMedicines } from "../../api/medicine";
import Layout from "../../components/Layout";
import "./dashboard.css";

export default function RetailerDashboard() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    getMedicines()
      .then(setMedicines)
      .catch(console.error);
  }, []);

  return (
    <Layout>
 
      <div className="page">
        <h2 className="page-title">Available Medicines</h2>
             {medicines.length === 0 && (
  <p>No medicines available right now.</p>
)}
        <div className="stats">
          <div className="stat-card">
            <h4>Total Medicines</h4>
            <p>{medicines.length}</p>
          </div>
        </div>

        <div className="card-grid">
          {medicines.map((m) => (
            <div className="card" key={m._id}>
              <h3>{m.name}</h3>
              <p><b>Price:</b> ₹{m.price}</p>
              <p><b>Stock:</b> {m.stock}</p>
              <p><b>Wholesaler:</b> {m.wholesaler?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
