import api from "./api";

export const makePayment = (paymentData) => {
    return api.post("/payments", paymentData);
};