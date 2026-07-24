package com.stayease.service;

import com.stayease.dto.request.LoginRequest;
import com.stayease.dto.request.RegisterRequest;
import com.stayease.response.ApiResponse;

public interface AuthService {

    ApiResponse<?> register(RegisterRequest request);

    ApiResponse<?> login(LoginRequest request);
}