package com.stayease.service;

import com.stayease.dto.request.PaymentRequest;
import com.stayease.dto.response.PaymentResponse;

public interface PaymentService {

    PaymentResponse makePayment(PaymentRequest request);

    PaymentResponse getPaymentByBooking(Long bookingId);

    PaymentResponse getPaymentByTransactionId(String transactionId);
}