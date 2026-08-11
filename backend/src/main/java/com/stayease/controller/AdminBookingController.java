package com.stayease.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.stayease.dto.response.BookingManagementResponse;
import com.stayease.response.ApiResponse;
import com.stayease.service.AdminBookingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin/bookings")
@RequiredArgsConstructor
public class AdminBookingController {

    private final AdminBookingService adminBookingService;

    @GetMapping
    public ResponseEntity<ApiResponse> getAllBookings() {

        List<BookingManagementResponse> bookings =
                adminBookingService.getAllBookings();

        return ResponseEntity.ok(
                new ApiResponse(
                        true,
                        "Bookings fetched successfully",
                        bookings
                )
        );
    }

    @PutMapping("/{bookingId}/cancel")
    public ResponseEntity<ApiResponse> cancelBooking(
            @PathVariable Long bookingId) {

        adminBookingService.cancelBooking(bookingId);

        return ResponseEntity.ok(
                new ApiResponse(
                        true,
                        "Booking cancelled successfully",
                        null
                )
        );
    }
}