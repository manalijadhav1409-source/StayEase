package com.stayease.controller;

import com.stayease.dto.request.ReviewRequest;
import com.stayease.dto.response.ReviewResponse;
import com.stayease.response.ApiResponse;
import com.stayease.service.ReviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping
    public ApiResponse<ReviewResponse> addReview(
            @Valid @RequestBody ReviewRequest request,
            Authentication authentication) {

        ReviewResponse response =
                reviewService.addReview(request, authentication.getName());

        return new ApiResponse<>(true, "Review added successfully", response);
    }

    @GetMapping("/hotel/{hotelId}")
    public ApiResponse<List<ReviewResponse>> getReviewsByHotel(
            @PathVariable Long hotelId) {

        return new ApiResponse<>(
                true,
                "Reviews fetched successfully",
                reviewService.getReviewsByHotel(hotelId));
    }

    @GetMapping("/my")
    public ApiResponse<List<ReviewResponse>> getMyReviews(
            Authentication authentication) {

        return new ApiResponse<>(
                true,
                "My reviews fetched successfully",
                reviewService.getMyReviews(authentication.getName()));
    }

    @DeleteMapping("/{reviewId}")
    public ApiResponse<String> deleteReview(
            @PathVariable Long reviewId,
            Authentication authentication) {

        reviewService.deleteReview(reviewId, authentication.getName());

        return new ApiResponse<>(true, "Review deleted successfully", null);
    }

    @GetMapping("/average/{hotelId}")
    public ApiResponse<Double> getAverageRating(
            @PathVariable Long hotelId) {

        return new ApiResponse<>(
                true,
                "Average rating fetched successfully",
                reviewService.getAverageRating(hotelId));
    }
}