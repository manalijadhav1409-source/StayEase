package com.stayease.serviceimpl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.stayease.entity.Hotel;
import com.stayease.entity.Room;
import com.stayease.repository.HotelRepository;
import com.stayease.repository.RoomRepository;
import com.stayease.service.RoomService;
import com.stayease.dto.request.RoomRequest;
import com.stayease.dto.response.RoomResponse;

import java.util.NoSuchElementException;


@Service
public class RoomServiceImpl implements RoomService {

	private final RoomRepository roomRepository;
	private final HotelRepository hotelRepository;
	
	
	public RoomServiceImpl(RoomRepository roomRepository, HotelRepository hotelRepository) {
		super();
		this.roomRepository = roomRepository;
		this.hotelRepository = hotelRepository;
	}

	
	 
	@Override
	public RoomResponse addRoom(RoomRequest request) {

	    Hotel hotel = hotelRepository.findById(request.getHotelId())
	            .orElseThrow(() -> new NoSuchElementException("Hotel not found"));

	    Room room = Room.builder()
	            .roomType(request.getRoomType())
	            .price(request.getPrice())
	            .capacity(request.getCapacity())
	            .available(request.getAvailable())
	            .hotel(hotel)
	            .build();

	    Room savedRoom = roomRepository.save(room);

	    return RoomResponse.builder()
	            .id(savedRoom.getId())
	            .roomType(savedRoom.getRoomType())
	            .price(savedRoom.getPrice())
	            .capacity(savedRoom.getCapacity())
	            .available(savedRoom.getAvailable())
	            .hotelId(hotel.getId())
	            .hotelName(hotel.getHotelName())
	            .build();
	}
	

	@Override
	public RoomResponse updateRoom(Long roomId, RoomRequest request) {

	    Room room = roomRepository.findById(roomId)
	            .orElseThrow(() -> new NoSuchElementException("Room not found"));

	    Hotel hotel = hotelRepository.findById(request.getHotelId())
	            .orElseThrow(() -> new NoSuchElementException("Hotel not found"));

	    room.setRoomType(request.getRoomType());
	    room.setPrice(request.getPrice());
	    room.setCapacity(request.getCapacity());
	    room.setAvailable(request.getAvailable());
	    room.setHotel(hotel);

	    Room updatedRoom = roomRepository.save(room);

	    return RoomResponse.builder()
	            .id(updatedRoom.getId())
	            .roomType(updatedRoom.getRoomType())
	            .price(updatedRoom.getPrice())
	            .capacity(updatedRoom.getCapacity())
	            .available(updatedRoom.getAvailable())
	            .hotelId(hotel.getId())
	            .hotelName(hotel.getHotelName())
	            .build();
	}

	@Override
	public void deleteRoom(Long roomId) {

	    Room room = roomRepository.findById(roomId)
	            .orElseThrow(() -> new NoSuchElementException("Room not found"));

	    roomRepository.delete(room);
	}

	@Override
	@Transactional(readOnly = true)
	public List<RoomResponse> getRoomsByHotel(Long hotelId) {

	    List<Room> rooms = roomRepository.findByHotelId(hotelId);

	    return rooms.stream()
	            .map(room -> RoomResponse.builder()
	                    .id(room.getId())
	                    .roomType(room.getRoomType())
	                    .price(room.getPrice())
	                    .capacity(room.getCapacity())
	                    .available(room.getAvailable())
	                    .hotelId(room.getHotel().getId())
	                    .hotelName(room.getHotel().getHotelName())
	                    .build())
	            .toList();
	}



	@Override
	public List<RoomResponse> getAllRooms() {

	    return roomRepository.findAll()
	            .stream()
	            .map(room -> RoomResponse.builder()
	                    .id(room.getId())                  // <-- id, roomId nahi
	                    .roomType(room.getRoomType())
	                    .price(room.getPrice())
	                    .capacity(room.getCapacity())
	                    .available(room.getAvailable())
	                    .hotelId(room.getHotel().getId())
	                    .hotelName(room.getHotel().getHotelName())
	                    .build())
	            .toList();
	}
	
	

}