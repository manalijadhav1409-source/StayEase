package com.stayease.serviceimpl;

import com.stayease.dto.request.HotelRequest;
import com.stayease.dto.response.HotelResponse;
import com.stayease.entity.Hotel;
import com.stayease.repository.HotelRepository;
import com.stayease.service.HotelService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HotelServiceImpl implements HotelService {

    private final HotelRepository hotelRepository;

    @Override
    public HotelResponse addHotel(HotelRequest request) {

        Hotel hotel = Hotel.builder()
                .hotelName(request.getHotelName())
                .city(request.getCity())
                .address(request.getAddress())
                .description(request.getDescription())
                .rating(request.getRating())
                .imageUrl(request.getImageUrl())
                .build();

        Hotel savedHotel = hotelRepository.save(hotel);

        return mapToResponse(savedHotel);
    }

    @Override
    public List<HotelResponse> getAllHotels() {
        return hotelRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public HotelResponse getHotelById(Long id) {

        Hotel hotel = hotelRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hotel not found"));

        return mapToResponse(hotel);
    }

    @Override
    public HotelResponse updateHotel(Long id, HotelRequest request) {

        Hotel hotel = hotelRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hotel not found"));

        hotel.setHotelName(request.getHotelName());
        hotel.setCity(request.getCity());
        hotel.setAddress(request.getAddress());
        hotel.setDescription(request.getDescription());
        hotel.setRating(request.getRating());
        hotel.setImageUrl(request.getImageUrl());

        Hotel updatedHotel = hotelRepository.save(hotel);

        return mapToResponse(updatedHotel);
    }

    @Override
    public void deleteHotel(Long id) {

        Hotel hotel = hotelRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hotel not found"));

        hotelRepository.delete(hotel);
    }

    @Override
    public List<HotelResponse> searchByCity(String city) {

        return hotelRepository.findByCityIgnoreCase(city)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    private HotelResponse mapToResponse(Hotel hotel) {

        return HotelResponse.builder()
                .hotelId(hotel.getId())
                .hotelName(hotel.getHotelName())
                .city(hotel.getCity())
                .address(hotel.getAddress())
                .description(hotel.getDescription())
                .rating(hotel.getRating())
                .imageUrl(hotel.getImageUrl())
                .build();
    }
}