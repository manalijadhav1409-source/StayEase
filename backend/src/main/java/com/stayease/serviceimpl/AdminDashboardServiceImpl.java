package com.stayease.serviceimpl;

import org.springframework.stereotype.Service;

import com.stayease.dto.response.AdminDashboardResponse;
import com.stayease.repository.BookingRepository;
import com.stayease.repository.HotelRepository;
import com.stayease.repository.PaymentRepository;
import com.stayease.repository.RoomRepository;
import com.stayease.repository.UserRepository;
import com.stayease.service.AdminDashboardService;
import java.util.List;

import com.stayease.dto.response.BookingSummaryResponse;
import com.stayease.dto.response.PaymentSummaryResponse;
import com.stayease.dto.response.RoomSummaryResponse;
import com.stayease.entity.Room;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminDashboardServiceImpl implements AdminDashboardService {

    private final UserRepository userRepository;
    private final HotelRepository hotelRepository;
    private final RoomRepository roomRepository;
    private final BookingRepository bookingRepository;
    private final PaymentRepository paymentRepository;

    @Override
    public AdminDashboardResponse getDashboardData() {

        long totalUsers = userRepository.count();
        long totalHotels = hotelRepository.count();
        long totalRooms = roomRepository.count();
        long totalBookings = bookingRepository.count();
        long totalPayments = paymentRepository.count();

        double totalRevenue = paymentRepository.getTotalRevenue();

        List<BookingSummaryResponse> recentBookings =
                bookingRepository.findTop10ByOrderByCreatedAtDesc()
                .stream()
                .map(booking -> {

                    Room room = roomRepository
                            .findById(booking.getRoomId())
                            .orElse(null);

                    return BookingSummaryResponse.builder()

                            .bookingId(booking.getId())

                            .customerName(
                                    booking.getUser().getFirstName() +
                                    " " +
                                    booking.getUser().getLastName()
                            )

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

                            .totalPrice(booking.getTotalPrice())

                            .bookingStatus(booking.getBookingStatus())

                            .build();

                })
                .toList();
        List<PaymentSummaryResponse> recentPayments =
                paymentRepository.findTop10ByOrderByCreatedAtDesc()
                .stream()
                .map(payment ->

                        PaymentSummaryResponse.builder()

                                .paymentId(payment.getId())

                                .customerName(
                                        payment.getBooking()
                                                .getUser()
                                                .getFirstName()
                                                + " "
                                                +
                                        payment.getBooking()
                                                .getUser()
                                                .getLastName()
                                )

                                .amount(payment.getAmount())

                                .paymentMethod(payment.getPaymentMethod())

                                .paymentStatus(payment.getPaymentStatus())

                                .build()

                ).toList();
        List<RoomSummaryResponse> roomAvailability =
                roomRepository.findTop10ByOrderByIdDesc()
                .stream()
                .map(room ->

                        RoomSummaryResponse.builder()

                                .roomId(room.getId())

                                .hotelName(room.getHotel().getHotelName())

                                .roomType(room.getRoomType())

                                .price(room.getPrice())

                                .available(room.getAvailable())

                                .build()

                ).toList();

        return AdminDashboardResponse.builder()

                .totalUsers(totalUsers)

                .totalHotels(totalHotels)

                .totalRooms(totalRooms)

                .totalBookings(totalBookings)

                .totalPayments(totalPayments)

                .totalRevenue(totalRevenue)

                .recentBookings(recentBookings)

                .recentPayments(recentPayments)

                .roomAvailability(roomAvailability)

                .build();
    }

}
