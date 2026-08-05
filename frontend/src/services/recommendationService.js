import api from "./api";

export const getRecommendations = (data) => {
    return api.post("/recommendations", data);
};