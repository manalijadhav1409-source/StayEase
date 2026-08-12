package com.stayease.dto.response;

import com.stayease.enums.BookingStatus;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookingSummaryResponse {

    private Long bookingId;

    private String customerName;

    private String hotelName;

    private String roomType;

    private Double totalPrice;

    private BookingStatus bookingStatus;

}