package com.stayease.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.stayease.dto.request.RecommendationRequest;
import com.stayease.dto.response.RecommendationResponse;
import com.stayease.response.ApiResponse;
import com.stayease.service.RecommendationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/recommendations")
@RequiredArgsConstructor
public class RecommendationController {

    private final RecommendationService recommendationService;

    @PostMapping
    public ApiResponse<List<RecommendationResponse>> getRecommendations(
            @RequestBody RecommendationRequest request) {

        return new ApiResponse<>(
                true,
                "Recommended hotels fetched successfully",
                recommendationService.getRecommendations(request)
        );
    }
}