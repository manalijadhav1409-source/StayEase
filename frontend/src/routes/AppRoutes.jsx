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
import HotelManagement from "../pages/admin/HotelManagement";
import AddHotel from "../pages/admin/AddHotel";
import EditHotel from "../pages/admin/EditHotel";
import RoomManagement from "../pages/admin/RoomManagement";
import AddRoom from "../pages/admin/AddRoom";
import EditRoom from "../pages/admin/EditRoom";

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

        <Route
            path="/admin/hotels"
            element={<HotelManagement />}
        />
        <Route
            path="/admin/hotels/add"
            element={<AddHotel />}
        />

        <Route
            path="/admin/hotels/edit/:id"
            element={<EditHotel />}
        />

        <Route
            path="/admin/rooms"
            element={<RoomManagement />}
        />

        <Route
            path="/admin/rooms/add"
            element={<AddRoom />}
        />

        <Route
            path="/admin/rooms/edit/:id"
            element={<EditRoom />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;