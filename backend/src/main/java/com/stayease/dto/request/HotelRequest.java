package com.stayease.dto.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HotelRequest {

    private String hotelName;
    private String city;
    private String address;
    private String description;
    private Double rating;
    private String imageUrl;
}