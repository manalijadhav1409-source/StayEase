package com.stayease.dto.response;

import com.stayease.enums.BookingStatus;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookingResponse {

    private Long bookingId;

    private Long roomId;

    private String hotelName;

    private String roomType;

    private String userName;

    private LocalDate checkInDate;

    private LocalDate checkOutDate;

    private Integer totalDays;

    private Double totalPrice;

    private BookingStatus bookingStatus;
}