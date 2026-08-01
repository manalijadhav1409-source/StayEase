package com.stayease.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stayease.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

    Optional<Payment> findByTransactionId(String transactionId);

    Optional<Payment> findByBookingId(Long bookingId);
}