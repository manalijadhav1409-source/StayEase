import api from "./api";

export const addReview = (data) => {
    return api.post("/reviews", data);
};

export const getReviewsByHotel = (hotelId) => {
    return api.get(`/reviews/hotel/${hotelId}`);
};

export const getAverageRating = (hotelId) => {
    return api.get(`/reviews/average/${hotelId}`);
};

export const getMyReviews = () => {
    return api.get("/reviews/my");
};

export const deleteReview = (reviewId) => {
    return api.delete(`/reviews/${reviewId}`);
};