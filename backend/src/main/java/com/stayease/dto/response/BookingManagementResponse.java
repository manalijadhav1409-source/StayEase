package com.stayease.dto.response;


import java.time.LocalDate;

import com.stayease.enums.BookingStatus;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookingManagementResponse {

    private Long bookingId;

    private String customerName;

    private String hotelName;

    private String roomType;

    private LocalDate checkInDate;

    private LocalDate checkOutDate;

    private Integer totalDays;

    private Double totalPrice;

    private BookingStatus bookingStatus;
}
