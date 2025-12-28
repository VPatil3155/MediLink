import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./routes/PrivateRoute";

import RetailerDashboard from "./pages/retailer/RetailerDashboard";
import WholesalerDashboard from "./pages/wholesaler/WholesalerDashboard";
import "./styles/layout.css";
import AddMedicine from "./pages/wholesaler/AddMedicine";




function App() {
  return (
    <BrowserRouter>
  <Routes>

    <Route path="/" element={<Login />} />

    <Route
      path="/profile"
      element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      }
    />

    <Route
      path="/retailer/dashboard"
      element={
        <PrivateRoute>
          <RetailerDashboard />
        </PrivateRoute>
      }
    />

    <Route
      path="/wholesaler/dashboard"
      element={
        <PrivateRoute>
          <WholesalerDashboard />
        </PrivateRoute>
      }
    />

    <Route
      path="/wholesaler/AddMedicine"
      element={
        <PrivateRoute>
          <AddMedicine />
        </PrivateRoute>
      }
    />

  </Routes>
</BrowserRouter>

  );
}

export default App;
