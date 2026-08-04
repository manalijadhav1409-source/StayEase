import api from "./api";

export const getRoomsByHotel = (hotelId) => {
  return api.get(`/rooms/hotel/${hotelId}`);
};