package com.stayease.service;

import java.util.List;

import com.stayease.dto.request.RoomRequest;
import com.stayease.dto.response.RoomResponse;

public interface RoomService {

    RoomResponse addRoom(RoomRequest request);

    RoomResponse updateRoom(Long roomId, RoomRequest request);

    void deleteRoom(Long roomId);

    List<RoomResponse> getRoomsByHotel(Long hotelId);
    
    List<RoomResponse> getAllRooms();
}