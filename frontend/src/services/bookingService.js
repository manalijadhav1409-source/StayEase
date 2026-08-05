import api from "./api";

export const createBooking = (bookingData) => {
    return api.post("/bookings", bookingData);
};