package com.stayease.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.stayease.dto.request.RoomRequest;
import com.stayease.service.RoomService;
import com.stayease.response.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/rooms")
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;
    
    @PostMapping
    public ResponseEntity<ApiResponse> addRoom(@RequestBody RoomRequest request) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ApiResponse(
                        true,
                        "Room added successfully",
                        roomService.addRoom(request)
                ));
        
    }
    
    
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateRoom(
            @PathVariable Long id,
            @RequestBody RoomRequest request) {

        return ResponseEntity.ok(
                new ApiResponse(
                        true,
                        "Room updated successfully",
                        roomService.updateRoom(id, request)
                )
        );
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteRoom(@PathVariable Long id) {

        roomService.deleteRoom(id);

        return ResponseEntity.ok(
                new ApiResponse(
                        true,
                        "Room deleted successfully",
                        null
                )
        );
    }
    
    
    @GetMapping("/hotel/{hotelId}")
    public ResponseEntity<ApiResponse> getRoomsByHotel(@PathVariable Long hotelId) {

        return ResponseEntity.ok(
                new ApiResponse(
                        true,
                        "Rooms fetched successfully",
                        roomService.getRoomsByHotel(hotelId)
                )
        );
    }
    
    @GetMapping
    public ResponseEntity<ApiResponse> getAllRooms() {

        return ResponseEntity.ok(
                new ApiResponse(
                        true,
                        "Rooms fetched successfully",
                        roomService.getAllRooms()
                )
        );
    }
}