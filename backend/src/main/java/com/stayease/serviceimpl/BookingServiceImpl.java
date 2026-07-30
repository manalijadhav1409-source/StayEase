package com.stayease.serviceimpl;
import org.springframework.transaction.annotation.Transactional;
import com.stayease.dto.request.BookingRequest;
import com.stayease.dto.response.BookingResponse;
import com.stayease.entity.Booking;
import com.stayease.entity.Room;
import com.stayease.entity.User;
import com.stayease.enums.BookingStatus;
import com.stayease.repository.BookingRepository;
import com.stayease.repository.RoomRepository;
import com.stayease.repository.UserRepository;
import com.stayease.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;

    @Transactional
    @Override
    public BookingResponse bookRoom(String email, BookingRequest request) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Room room = roomRepository.findById(request.getRoomId())
                .orElseThrow(() -> new RuntimeException("Room not found"));

        if (!Boolean.FALSE.equals(room.getAvailable())) {
            throw new RuntimeException("Room is not available");
        }

        if (request.getCheckInDate() == null || request.getCheckOutDate() == null) {
            throw new RuntimeException("Check-in and Check-out dates are required");
        }

        if (!request.getCheckOutDate().isAfter(request.getCheckInDate())) {
            throw new RuntimeException("Check-out date must be after Check-in date");
        }

        long totalDays = ChronoUnit.DAYS.between(
                request.getCheckInDate(),
                request.getCheckOutDate());

        if (totalDays <= 0) {
            throw new RuntimeException("Invalid booking duration");
        }

        double totalPrice = room.getPrice() * totalDays;

        Booking booking = Booking.builder()
                .user(user)
                .roomId(room.getId())
                .checkInDate(request.getCheckInDate())
                .checkOutDate(request.getCheckOutDate())
                .totalDays((int) totalDays)
                .totalPrice(totalPrice)
                .bookingStatus(BookingStatus.BOOKED)
                .build();

        Booking savedBooking = bookingRepository.save(booking);

        room.setAvailable(false);
        roomRepository.save(room);

        return BookingResponse.builder()
                .bookingId(savedBooking.getId())
                .roomId(savedBooking.getRoomId())
                .checkInDate(savedBooking.getCheckInDate())
                .checkOutDate(savedBooking.getCheckOutDate())
                .totalDays(savedBooking.getTotalDays())
                .totalPrice(savedBooking.getTotalPrice())
                .bookingStatus(savedBooking.getBookingStatus())
                .build();
    }
    
    @Override
    public List<BookingResponse> getMyBookings(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return bookingRepository.findByUserId(user.getId())
                .stream()
                .map(booking -> BookingResponse.builder()
                        .bookingId(booking.getId())
                        .roomId(booking.getRoomId())
                        .checkInDate(booking.getCheckInDate())
                        .checkOutDate(booking.getCheckOutDate())
                        .totalDays(booking.getTotalDays())
                        .totalPrice(booking.getTotalPrice())
                        .bookingStatus(booking.getBookingStatus())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public BookingResponse getBookingById(Long bookingId) {

        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        return BookingResponse.builder()
                .bookingId(booking.getId())
                .roomId(booking.getRoomId())
                .checkInDate(booking.getCheckInDate())
                .checkOutDate(booking.getCheckOutDate())
                .totalDays(booking.getTotalDays())
                .totalPrice(booking.getTotalPrice())
                .bookingStatus(booking.getBookingStatus())
                .build();
    }
    
    @Transactional
    @Override
    public void cancelBooking(Long bookingId) {

        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        if (booking.getBookingStatus() == BookingStatus.CANCELLED) {
            throw new RuntimeException("Booking is already cancelled");
        }

        Room room = roomRepository.findById(booking.getRoomId())
                .orElseThrow(() -> new RuntimeException("Room not found"));

        booking.setBookingStatus(BookingStatus.CANCELLED);
        bookingRepository.save(booking);

        room.setAvailable(true);
        roomRepository.save(room);
    }
}