package com.stayease.serviceimpl;

import com.stayease.dto.request.ReviewRequest;
import com.stayease.dto.response.ReviewResponse;
import com.stayease.entity.Hotel;
import com.stayease.entity.Review;
import com.stayease.entity.User;
import com.stayease.repository.HotelRepository;
import com.stayease.repository.ReviewRepository;
import com.stayease.repository.UserRepository;
import com.stayease.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final HotelRepository hotelRepository;

    @Override
    public ReviewResponse addReview(ReviewRequest request, String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Hotel hotel = hotelRepository.findById(request.getHotelId())
                .orElseThrow(() -> new RuntimeException("Hotel not found"));

        if (reviewRepository.findByUserIdAndHotelId(user.getId(), hotel.getId()).isPresent()) {
            throw new RuntimeException("You have already reviewed this hotel.");
        }
        
        Review review = Review.builder()
                .rating(request.getRating())
                .comment(request.getComment())
                .user(user)
                .hotel(hotel)
                .build();

        Review savedReview = reviewRepository.save(review);

        return mapToResponse(savedReview);
    }

    @Override
    public List<ReviewResponse> getReviewsByHotel(Long hotelId) {

        return reviewRepository.findByHotelId(hotelId)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public List<ReviewResponse> getMyReviews(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return reviewRepository.findByUserId(user.getId())
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteReview(Long reviewId, String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new RuntimeException("Review not found"));

        if (!review.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("You can delete only your own review");
        }

        reviewRepository.delete(review);
    }

    @Override
    public Double getAverageRating(Long hotelId) {

        List<Review> reviews = reviewRepository.findByHotelId(hotelId);

        if (reviews.isEmpty()) {
            return 0.0;
        }

        return reviews.stream()
                .mapToInt(Review::getRating)
                .average()
                .orElse(0.0);
    }

    private ReviewResponse mapToResponse(Review review) {

        return ReviewResponse.builder()
                .reviewId(review.getId())
                .hotelId(review.getHotel().getId())
                .hotelName(review.getHotel().getHotelName())
                .userId(review.getUser().getId())
                .userName(review.getUser().getFirstName() + " " + review.getUser().getLastName())
                .rating(review.getRating())
                .comment(review.getComment())
                .build();
    }
}