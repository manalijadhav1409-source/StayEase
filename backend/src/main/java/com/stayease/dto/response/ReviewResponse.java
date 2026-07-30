package com.stayease.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReviewResponse {

    private Long reviewId;

    private Long hotelId;

    private String hotelName;

    private Long userId;

    private String userName;

    private Integer rating;

    private String comment;
}