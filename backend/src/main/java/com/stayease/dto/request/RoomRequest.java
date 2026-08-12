package com.stayease.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RoomRequest {

    private String roomType;

    private Double price;

    private Integer capacity;

    private Boolean available;

    private Long hotelId;
    
   

    private String imageUrl;

   
}