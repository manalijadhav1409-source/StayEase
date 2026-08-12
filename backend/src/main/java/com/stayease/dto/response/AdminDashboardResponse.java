package com.stayease.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminDashboardResponse {

    private Long totalUsers;

    private Long totalHotels;

    private Long totalRooms;

    private Long totalBookings;

    private Long totalPayments;

    private Double totalRevenue;

    private List<BookingSummaryResponse> recentBookings;

    private List<PaymentSummaryResponse> recentPayments;

    private List<RoomSummaryResponse> roomAvailability;

}