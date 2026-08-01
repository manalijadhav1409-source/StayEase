package com.stayease.repository;

import com.stayease.entity.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;


public interface HotelRepository extends JpaRepository<Hotel, Long> {

    List<Hotel> findByCityIgnoreCase(String city);
    
    @Query("""
    		SELECT h
    		FROM Hotel h
    		JOIN Room r ON r.hotel.id = h.id
    		WHERE LOWER(h.city) = LOWER(:city)
    		AND r.price <= :budget
    		AND r.capacity >= :guests
    		AND r.available = true
    		ORDER BY h.rating DESC
    		""")
    		List<Hotel> findRecommendedHotels(
    		        @Param("city") String city,
    		        @Param("budget") Double budget,
    		        @Param("guests") Integer guests);

}
