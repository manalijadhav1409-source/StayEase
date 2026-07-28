package com.stayease.service;

import com.stayease.dto.request.HotelRequest;
import com.stayease.dto.response.HotelResponse;

import java.util.List;

public interface HotelService {

    HotelResponse addHotel(HotelRequest request);

    List<HotelResponse> getAllHotels();

    HotelResponse getHotelById(Long id);

    HotelResponse updateHotel(Long id, HotelRequest request);

    void deleteHotel(Long id);

    List<HotelResponse> searchByCity(String city);
}