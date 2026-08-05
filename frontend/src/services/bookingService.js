import api from "./api";

export const createBooking = (bookingData) => {
    return api.post("/bookings", bookingData);
};

export const getMyBookings = () => {
    return api.get("/bookings/my");
};

export const getBookingById = (bookingId) => {
    return api.get(`/bookings/${bookingId}`);
};

export const cancelBooking = (bookingId) => {
    return api.delete(`/bookings/${bookingId}`);
};