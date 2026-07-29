package com.stayease.controller;

import com.stayease.dto.request.BookingRequest;
import com.stayease.dto.response.BookingResponse;
import com.stayease.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    @PostMapping
    public BookingResponse bookRoom(Authentication authentication,
                                    @RequestBody BookingRequest request) {

        return bookingService.bookRoom(authentication.getName(), request);
    }

    @GetMapping("/my")
    public List<BookingResponse> myBookings(Authentication authentication) {

        return bookingService.getMyBookings(authentication.getName());
    }

    @GetMapping("/{id}")
    public BookingResponse getBookingById(@PathVariable Long id) {

        return bookingService.getBookingById(id);
    }

    @DeleteMapping("/{id}")
    public String cancelBooking(@PathVariable Long id) {

        bookingService.cancelBooking(id);
        return "Booking Cancelled Successfully";
    }
}