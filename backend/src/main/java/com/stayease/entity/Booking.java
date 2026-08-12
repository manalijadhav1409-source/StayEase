package com.stayease.entity;

import com.stayease.enums.BookingStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "bookings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Booking extends BaseEntity {

   

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private Long roomId;

    private LocalDate checkInDate;

    private LocalDate checkOutDate;

    private Integer totalDays;

    private Double totalPrice;

    @Enumerated(EnumType.STRING)
    private BookingStatus bookingStatus;
}