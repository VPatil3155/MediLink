import { useEffect, useState } from "react";
import { getWholesalerOrders, updateOrderStatus } from "../../api/order";
import Layout from "../../components/Layout";
import "./dashboard.css";

export default function WholesalerDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getWholesalerOrders().then(setOrders);
  }, []);

  const handleUpdate = async (id, status) => {
    await updateOrderStatus(id, status);
    const updated = await getWholesalerOrders();
    setOrders(updated);
  };

  return (
    <Layout>
      <div className="page">
        <h2 className="page-title">Orders Received</h2>
{orders.length === 0 && (
  <p>No orders received yet.</p>
)}

        <div className="stats">
  <div className="stat-card">
    <h4>Total Orders</h4>
    <p>{orders.length}</p>
  </div>

  <div className="stat-card">
    <h4>Pending</h4>
    <p>{orders.filter(o => o.status === "pending").length}</p>
  </div>
</div>


        <table className="table">
          <thead>
            <tr>
              <th>Medicine</th>
              <th>Retailer</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o._id}>
                <td>{o.medicine.name}</td>
                <td>{o.retailer.name}</td>
                <td>{o.quantity}</td>
                <td>
                  <span className={`badge ${o.status}`}>
                    {o.status}
                  </span>
                </td>
                <td>
                  {o.status === "pending" && (
                    <>
                      <button
                        className="btn accept"
                        onClick={() => handleUpdate(o._id, "accepted")}
                      >
                        Accept
                      </button>
                      <button
                        className="btn reject"
                        onClick={() => handleUpdate(o._id, "rejected")}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
