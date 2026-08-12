import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { addReview } from "../../services/reviewService";
import "./ReviewPage.css";

function ReviewPage() {

    const navigate = useNavigate();
    const { hotelId } = useParams();

    const [rating, setRating] = useState(5);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState("");

    const handleSubmit = async (e) => {

    e.preventDefault();

    if (comment.trim() === "") {
        alert("Please write your review.");
        return;
    }

    try {

        const review = {
            hotelId: Number(hotelId),
            rating,
            comment,
        };

        const response = await addReview(review);

       

        alert("Review Submitted Successfully");

        navigate(`/hotel/${hotelId}`);

    } catch (error) {

       

        const message =
            error.response?.data?.message || "Failed to submit review.";

        alert(message);

        if (message === "You have already reviewed this hotel.") {
            navigate(`/hotel/${hotelId}`);
        }

    }

};

    return (

        <div className="container py-5">

            <div
                className="card shadow-lg border-0 mx-auto review-card"
            >

                <div className="card-body p-4">

                    <h2 className="text-center fw-bold mb-4">
                        Write a Review
                    </h2>

                    <div className="text-center mb-4">

                        <h5 className="fw-semibold">
                            Share Your Experience
                        </h5>

                        <p className="text-muted mb-0">
                            Your feedback helps other travelers choose the best hotel.
                        </p>

                    </div>

                    <div className="mb-4 text-center">

                        <label className="form-label fw-semibold d-block mb-3">
                            Rating
                        </label>

                        {[1, 2, 3, 4, 5].map((star) => (

                            <FaStar
                                key={star}
                                size={35}
                                className="star"
                                color={
                                    star <= (hover || rating)
                                        ? "#ffc107"
                                        : "#d3d3d3"
                                }
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                            />

                        ))}

                    </div>

                    <div className="mb-4">

                        <label className="form-label fw-semibold">
                            Comment
                        </label>

                        <textarea
                            className="form-control"
                            rows="5"
                            placeholder="Share your experience..."
                            value={comment}
                            onChange={(e) =>
                                setComment(e.target.value)
                            }
                            required
                        />

                    </div>

                    <button
                        className="btn btn-warning w-100 fw-bold"
                        onClick={handleSubmit}
                    >
                        Submit Review
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ReviewPage;