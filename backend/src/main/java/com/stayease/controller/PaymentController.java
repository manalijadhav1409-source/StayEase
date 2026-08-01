package com.stayease.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stayease.dto.request.PaymentRequest;
import com.stayease.dto.response.PaymentResponse;
import com.stayease.response.ApiResponse;
import com.stayease.service.PaymentService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;
    
    @PostMapping
    public ResponseEntity<ApiResponse<PaymentResponse>> makePayment(
            @Valid @RequestBody PaymentRequest request) {

        PaymentResponse response = paymentService.makePayment(request);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ApiResponse<>(
                        true,
                        "Payment successful",
                        response
                ));
    }
    
    
    @GetMapping("/booking/{bookingId}")
    public ResponseEntity<ApiResponse<PaymentResponse>> getPaymentByBooking(
            @PathVariable Long bookingId) {

        PaymentResponse response = paymentService.getPaymentByBooking(bookingId);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Payment fetched successfully",
                        response
                ));
    }
    
    @GetMapping("/transaction/{transactionId}")
    public ResponseEntity<ApiResponse<PaymentResponse>> getPaymentByTransactionId(
            @PathVariable String transactionId) {

        PaymentResponse response = paymentService.getPaymentByTransactionId(transactionId);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Payment fetched successfully",
                        response
                ));
    }

}
