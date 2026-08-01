package com.stayease.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.stayease.entity.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

    List<Room> findByHotelId(Long hotelId);
    @Query("""
    		SELECT r
    		FROM Room r
    		WHERE LOWER(r.hotel.city) = LOWER(:city)
    		AND r.price <= :budget
    		AND r.capacity >= :guests
    		AND r.available = true
    		ORDER BY r.hotel.rating DESC
    		""")
    		List<Room> findRecommendedRooms(
    		        @Param("city") String city,
    		        @Param("budget") Double budget,
    		        @Param("guests") Integer guests);

}