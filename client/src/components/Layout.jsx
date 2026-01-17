import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }) {
  const { user } = useAuth();   // 👈 get logged-in user

  return (
    <div className="layout">
      <Navbar />
      <div className="body">
        <Sidebar role={user?.role} />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}
