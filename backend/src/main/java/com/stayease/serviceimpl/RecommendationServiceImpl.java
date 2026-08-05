package com.stayease.serviceimpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.stayease.dto.request.RecommendationRequest;
import com.stayease.dto.response.RecommendationResponse;
import com.stayease.entity.Room;
import com.stayease.repository.RoomRepository;
import com.stayease.service.RecommendationService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RecommendationServiceImpl implements RecommendationService {

    private final RoomRepository roomRepository;

    @Override
    public List<RecommendationResponse> getRecommendations(RecommendationRequest request) {

        List<Room> rooms = roomRepository.findRecommendedRooms(
                request.getCity(),
                request.getBudget(),
                request.getGuests());

        return rooms.stream()
                .map(room -> RecommendationResponse.builder()
                        .hotelId(room.getHotel().getId())
                        .hotelName(room.getHotel().getHotelName())
                        .city(room.getHotel().getCity())
                        .roomType(room.getRoomType())
                        .price(room.getPrice())
                        .capacity(room.getCapacity())
                        .rating(room.getHotel().getRating())
                        .build())
                .collect(Collectors.toList());
    }
}