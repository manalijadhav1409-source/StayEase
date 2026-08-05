import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import HomePage from "../pages/home/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import HotelDetailsPage from "../pages/hotel/HotelDetailsPage";
import BookingPage from "../pages/booking/BookingPage";
import PaymentPage from "../pages/payment/PaymentPage";
import RecommendationPage from "../pages/recommendation/RecommendationPage";
import ReviewPage from "../pages/review/ReviewPage";
import AdminDashboard from "../pages/admin/AdminDashboard";
import MyBookingsPage from "../pages/booking/MyBookingsPage";

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

        <Route
            path="/recommendation"
            element={
                <ProtectedRoute>
                    <RecommendationPage />
                </ProtectedRoute>
            }
        />

        <Route
            path="/review/:hotelId"
            element={
                <ProtectedRoute>
                    <ReviewPage />
                </ProtectedRoute>
            }
        />

        <Route
            path="/admin/dashboard"
            element={
                <ProtectedRoute>
                    <AdminDashboard />
                </ProtectedRoute>
            }
        />


        <Route
            path="/bookings"
            element={
                <ProtectedRoute>
                    <MyBookingsPage />
                </ProtectedRoute>
            }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;