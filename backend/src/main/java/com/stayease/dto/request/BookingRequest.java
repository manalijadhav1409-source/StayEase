package com.stayease.dto.request;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookingRequest {

    private Long roomId;

    private LocalDate checkInDate;

    private LocalDate checkOutDate;
}