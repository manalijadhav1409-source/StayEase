package com.stayease.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stayease.dto.response.AdminDashboardResponse;
import com.stayease.response.ApiResponse;
import com.stayease.service.AdminDashboardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminDashboardController {

    private final AdminDashboardService adminDashboardService;

    @GetMapping("/dashboard")
    public ApiResponse<AdminDashboardResponse> getDashboard() {

        return new ApiResponse<>(
                true,
                "Dashboard data fetched successfully",
                adminDashboardService.getDashboardData()
        );
    }
}