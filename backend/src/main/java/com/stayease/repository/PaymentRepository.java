package com.stayease.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stayease.entity.Payment;

import org.springframework.data.jpa.repository.Query;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

    Optional<Payment> findByTransactionId(String transactionId);

    Optional<Payment> findByBookingId(Long bookingId);
    
    @Query("SELECT COALESCE(SUM(p.amount), 0) FROM Payment p WHERE p.paymentStatus = 'SUCCESS'")
    Double getTotalRevenue();
}