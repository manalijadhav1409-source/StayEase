package com.stayease.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HotelResponse {

    private Long hotelId;
    private String hotelName;
    private String city;
    private String address;
    private String description;
    private Double rating;
    private String imageUrl;
}