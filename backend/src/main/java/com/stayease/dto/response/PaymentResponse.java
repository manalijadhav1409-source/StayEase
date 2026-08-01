package com.stayease.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PaymentResponse {

    private Long paymentId;

    private Long bookingId;

    private Double amount;

    private String paymentMethod;

    private String paymentStatus;

    private String transactionId;
}