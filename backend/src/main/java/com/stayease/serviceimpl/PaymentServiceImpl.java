package com.stayease.serviceimpl;

import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.stayease.dto.request.PaymentRequest;
import com.stayease.dto.response.PaymentResponse;
import com.stayease.entity.Booking;
import com.stayease.entity.Payment;
import com.stayease.repository.BookingRepository;
import com.stayease.repository.PaymentRepository;
import com.stayease.service.PaymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;
    private final BookingRepository bookingRepository;

    @Override
 
    	public PaymentResponse makePayment(PaymentRequest request) {

    	    Booking booking = bookingRepository.findById(request.getBookingId())
    	            .orElseThrow(() -> new RuntimeException("Booking not found"));

    	    if (paymentRepository.findByBookingId(request.getBookingId()).isPresent()) {
    	        throw new RuntimeException("Payment already exists for this booking");
    	    }

    	    Payment payment = Payment.builder()
    	            .booking(booking)
    	            .amount(request.getAmount())
    	            .paymentMethod(request.getPaymentMethod())
    	            .paymentStatus("SUCCESS")
    	            .transactionId(UUID.randomUUID().toString())
    	            .build();

    	    Payment savedPayment = paymentRepository.save(payment);

    	    return PaymentResponse.builder()
    	            .paymentId(savedPayment.getId())
    	            .bookingId(savedPayment.getBooking().getId())
    	            .amount(savedPayment.getAmount())
    	            .paymentMethod(savedPayment.getPaymentMethod())
    	            .paymentStatus(savedPayment.getPaymentStatus())
    	            .transactionId(savedPayment.getTransactionId())
    	            .build();
    	}
  

    @Override
    	public PaymentResponse getPaymentByBooking(Long bookingId) {

    	    Payment payment = paymentRepository.findByBookingId(bookingId)
    	            .orElseThrow(() -> new RuntimeException("Payment not found"));

    	    return PaymentResponse.builder()
    	            .paymentId(payment.getId())
    	            .bookingId(payment.getBooking().getId())
    	            .amount(payment.getAmount())
    	            .paymentMethod(payment.getPaymentMethod())
    	            .paymentStatus(payment.getPaymentStatus())
    	            .transactionId(payment.getTransactionId())
    	            .build();
    	}
    

    	@Override
    	public PaymentResponse getPaymentByTransactionId(String transactionId) {

    	    Payment payment = paymentRepository.findByTransactionId(transactionId)
    	            .orElseThrow(() -> new RuntimeException("Payment not found"));

    	    return PaymentResponse.builder()
    	            .paymentId(payment.getId())
    	            .bookingId(payment.getBooking().getId())
    	            .amount(payment.getAmount())
    	            .paymentMethod(payment.getPaymentMethod())
    	            .paymentStatus(payment.getPaymentStatus())
    	            .transactionId(payment.getTransactionId())
    	            .build();
    	}
    }
