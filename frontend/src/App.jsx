import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

const hasValidToken = () => {
  const token = localStorage.getItem("token");
  return Boolean(token && token !== "undefined" && token !== "null");
};


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={hasValidToken() ? <Navigate to="/dashboard" replace /> : <LandingPage />} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;