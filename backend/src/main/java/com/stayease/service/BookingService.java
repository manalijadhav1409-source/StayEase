package com.stayease.service;

import com.stayease.dto.request.BookingRequest;
import com.stayease.dto.response.BookingResponse;

import java.util.List;

public interface BookingService {

    BookingResponse bookRoom(String email, BookingRequest request);

    List<BookingResponse> getMyBookings(String email);

    BookingResponse getBookingById(Long bookingId);

    void cancelBooking(Long bookingId);
}