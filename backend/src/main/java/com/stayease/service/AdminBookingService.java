package com.stayease.service;

import java.util.List;

import com.stayease.dto.response.BookingManagementResponse;

public interface AdminBookingService {

    List<BookingManagementResponse> getAllBookings();

    void cancelBooking(Long bookingId);
}