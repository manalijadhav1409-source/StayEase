import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import HomePage from "../pages/home/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import HotelDetailsPage from "../pages/hotel/HotelDetailsPage";
import BookingPage from "../pages/booking/BookingPage";
import PaymentPage from "../pages/payment/PaymentPage";

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

        <Route
          path="/hotel/:id"
          element={
              <ProtectedRoute>
                  <HotelDetailsPage />
              </ProtectedRoute>
          }
        />

        <Route
          path="/booking/:roomId"
          element={
              <ProtectedRoute>
                  <BookingPage />
              </ProtectedRoute>
          }
        />


          <Route
            path="/payment"
            element={
                <ProtectedRoute>
                    <PaymentPage />
                </ProtectedRoute>
            }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;