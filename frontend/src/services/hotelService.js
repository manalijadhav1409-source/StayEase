import api from "./api";

export const getAllHotels = () => {
    return api.get("/hotels");
};

export const getHotelById = (id) => {
    return api.get(`/hotels/${id}`);
};

export const addHotel = (hotel) => {
    return api.post("/hotels", hotel);
};

export const updateHotel = (id, hotel) => {
    return api.put(`/hotels/${id}`, hotel);
};

export const deleteHotel = (id) => {
    return api.delete(`/hotels/${id}`);
};

// ⭐ हे add कर
export const searchHotels = (city) => {
    return api.get(`/hotels/search?city=${city}`);
};