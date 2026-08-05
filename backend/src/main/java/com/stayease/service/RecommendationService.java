package com.stayease.service;

import java.util.List;

import com.stayease.dto.request.RecommendationRequest;
import com.stayease.dto.response.RecommendationResponse;

public interface RecommendationService {

    List<RecommendationResponse> getRecommendations(RecommendationRequest request);
}