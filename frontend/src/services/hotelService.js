import api from "./api";

export const getAllHotels = () => {
  return api.get("/hotels");
};

export const searchHotels = (city) => {
  return api.get(`/hotels/search?city=${city}`);
};

export const getHotelById = (id) => {
  return api.get(`/hotels/${id}`);
};