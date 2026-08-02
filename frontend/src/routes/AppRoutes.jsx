import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import HomePage from "../pages/customer/HomePage";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
          <Route
              path="/home"
              element={
                  <ProtectedRoute>
                      <HomePage />
                  </ProtectedRoute>
              }
          />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;