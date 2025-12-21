import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    api.get("/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => setData(res.data))
      .catch(() => {
        logout();
        navigate("/");
      });
  }, [token, logout, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
