import { useEffect, useState } from "react";
import { getMedicines } from "../../api/medicine";

export default function RetailerDashboard() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    getMedicines()
      .then(setMedicines)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Available Medicines</h2>

      {medicines.map((m) => (
        <div key={m._id}>
          <h4>{m.name}</h4>
          <p>Price: ₹{m.price}</p>
          <p>Stock: {m.stock}</p>
          <p>Wholesaler: {m.wholesaler?.name}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
