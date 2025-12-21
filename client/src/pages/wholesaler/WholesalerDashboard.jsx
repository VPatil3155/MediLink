import { useEffect, useState } from "react";
import { getWholesalerOrders } from "../../api/order";
import { updateOrderStatus } from "../../api/order";

export default function WholesalerDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getWholesalerOrders().then(setOrders);
  }, []);

  return (
    <div>
      <h2>Orders Received</h2>

      {orders.map((o) => (
        <div key={o._id}>
          <p><b>Medicine:</b> {o.medicine.name}</p>
          <p><b>Retailer:</b> {o.retailer.name}</p>
          <p><b>Quantity:</b> {o.quantity}</p>
          <p><b>Status:</b> {o.status}</p>
          <hr />
          <button onClick={() => updateOrderStatus(o._id, "accepted")}>
  Accept
</button>

<button onClick={() => updateOrderStatus(o._id, "rejected")}>
  Reject
</button>

        </div>
      ))}
    </div>
  );
}
