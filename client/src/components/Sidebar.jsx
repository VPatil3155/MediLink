import { Link } from "react-router-dom";

export default function Sidebar({ role }) {
    console.log("SIDEBAR ROLE 👉", role);

  return (
    <div className="sidebar">
      <p className="menu-title">Menu</p>

      {role === "retailer" && (
        <>
          <Link to="/retailer/dashboard">Medicines</Link>
        </>
      )}

      {role === "wholesaler" && (
        <>
          <Link to="/wholesaler/dashboard">Orders</Link>
          <Link to="/wholesaler/AddMedicine">Add Medicine</Link>
        </>
      )}
    </div>
  );
}
