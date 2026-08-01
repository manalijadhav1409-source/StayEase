package com.stayease.serviceimpl;

import org.springframework.stereotype.Service;

import com.stayease.dto.response.AdminDashboardResponse;
import com.stayease.repository.BookingRepository;
import com.stayease.repository.HotelRepository;
import com.stayease.repository.PaymentRepository;
import com.stayease.repository.RoomRepository;
import com.stayease.repository.UserRepository;
import com.stayease.service.AdminDashboardService;

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

        double totalRevenue = bookingRepository.findAll()
                .stream()
                .map(booking -> booking.getTotalPrice() == null ? 0.0 : booking.getTotalPrice())
                .mapToDouble(Double::doubleValue)
                .sum();

        return AdminDashboardResponse.builder()
                .totalUsers(totalUsers)
                .totalHotels(totalHotels)
                .totalRooms(totalRooms)
                .totalBookings(totalBookings)
                .totalPayments(totalPayments)
                .totalRevenue(totalRevenue)
                .build();
    }
}