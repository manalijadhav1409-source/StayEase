import api from "./api";

export const getAllAdminBookings = () => {
    return api.get("/admin/bookings");
};

export const cancelAdminBooking = (bookingId) => {
    return api.put(`/admin/bookings/${bookingId}/cancel`);
};