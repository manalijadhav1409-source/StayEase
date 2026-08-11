package com.stayease.serviceimpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.stayease.dto.response.BookingManagementResponse;
import com.stayease.entity.Booking;
import com.stayease.entity.Room;
import com.stayease.repository.BookingRepository;
import com.stayease.repository.RoomRepository;
import com.stayease.service.AdminBookingService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminBookingServiceImpl implements AdminBookingService {

    private final BookingRepository bookingRepository;
    private final RoomRepository roomRepository;

    @Override
    public List<BookingManagementResponse> getAllBookings() {

        return bookingRepository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    private BookingManagementResponse mapToResponse(Booking booking) {

        Room room = roomRepository
                .findById(booking.getRoomId())
                .orElse(null);

        String customerName =
                booking.getUser().getFirstName()
                + " "
                + booking.getUser().getLastName();

        return BookingManagementResponse.builder()

                .bookingId(booking.getId())

                .customerName(customerName)

                .hotelName(
                        room != null
                                ? room.getHotel().getHotelName()
                                : "N/A"
                )

                .roomType(
                        room != null
                                ? room.getRoomType()
                                : "N/A"
                )

                .checkInDate(booking.getCheckInDate())

                .checkOutDate(booking.getCheckOutDate())

                .totalDays(booking.getTotalDays())

                .totalPrice(booking.getTotalPrice())

                .bookingStatus(booking.getBookingStatus())

                .build();
    }

    @Override
    public void cancelBooking(Long bookingId) {

        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() ->
                        new RuntimeException("Booking not found"));

        booking.setBookingStatus(
                com.stayease.enums.BookingStatus.CANCELLED
        );

        bookingRepository.save(booking);
    }
}