package com.stayease.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RoomSummaryResponse {

    private Long roomId;

    private String hotelName;

    private String roomType;

    private Double price;

    private Boolean available;

}