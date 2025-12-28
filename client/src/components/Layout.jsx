import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ role, children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="body">
        <Sidebar role={role} />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}
