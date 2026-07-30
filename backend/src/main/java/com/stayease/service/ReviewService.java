package com.stayease.service;

import com.stayease.dto.request.ReviewRequest;
import com.stayease.dto.response.ReviewResponse;

import java.util.List;

public interface ReviewService {

    ReviewResponse addReview(ReviewRequest request, String email);

    List<ReviewResponse> getReviewsByHotel(Long hotelId);

    List<ReviewResponse> getMyReviews(String email);

    void deleteReview(Long reviewId, String email);

    Double getAverageRating(Long hotelId);
}