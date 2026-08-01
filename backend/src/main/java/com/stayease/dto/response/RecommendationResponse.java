package com.stayease.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecommendationResponse {

    private Long hotelId;

    private String hotelName;

    private String city;

    private String roomType;

    private Double price;

    private Integer capacity;

    private Double rating;
}