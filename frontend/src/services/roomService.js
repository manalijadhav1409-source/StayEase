import api from "./api";

export const getAllRooms = () => {
    return api.get("/rooms");
};

export const getRoomsByHotel = (hotelId) => {
    return api.get(`/rooms/hotel/${hotelId}`);
};

export const addRoom = (room) => {
    return api.post("/rooms", room);
};

export const updateRoom = (id, room) => {
    return api.put(`/rooms/${id}`, room);
};

export const deleteRoom = (id) => {
    return api.delete(`/rooms/${id}`);
};