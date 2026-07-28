package com.stayease.controller;

import com.stayease.dto.request.HotelRequest;
import com.stayease.dto.response.HotelResponse;
import com.stayease.service.HotelService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hotels")
@RequiredArgsConstructor
public class HotelController {

    private final HotelService hotelService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public HotelResponse addHotel(@RequestBody HotelRequest request) {
        return hotelService.addHotel(request);
    }

    @GetMapping
    public List<HotelResponse> getAllHotels() {
        return hotelService.getAllHotels();
    }

    @GetMapping("/{id}")
    public HotelResponse getHotelById(@PathVariable Long id) {
        return hotelService.getHotelById(id);
    }

    @PutMapping("/{id}")
    public HotelResponse updateHotel(@PathVariable Long id,
                                     @RequestBody HotelRequest request) {
        return hotelService.updateHotel(id, request);
    }

    @DeleteMapping("/{id}")
    public String deleteHotel(@PathVariable Long id) {
        hotelService.deleteHotel(id);
        return "Hotel deleted successfully";
    }

    @GetMapping("/search")
    public List<HotelResponse> searchByCity(@RequestParam String city) {
        return hotelService.searchByCity(city);
    }
}