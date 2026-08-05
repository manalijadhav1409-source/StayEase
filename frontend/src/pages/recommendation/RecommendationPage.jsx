import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecommendations } from "../../services/recommendationService";
import "./RecommendationPage.css";

import hotelImage from "../../assets/images/hotel-card.jpg";
import tajBanner from "../../assets/images/taj-banner.jpg";
import royalBanner from "../../assets/images/royal-orchid-banner.jpg";

function RecommendationPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        city: "",
        budget: "",
        guests: "",
    });

    const [recommendations, setRecommendations] = useState([]);

    const hotelImages = {
        "Taj Hotel": tajBanner,
        "Royal Orchid Hotel": royalBanner,
    };

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await getRecommendations({
                city: formData.city,
                budget: Number(formData.budget),
                guests: Number(formData.guests),
            });

            setRecommendations(response.data.data);

        } catch (error) {

            console.error(error);

            alert("Failed to fetch recommendations.");

        }

    };

    return (

        <div className="container py-5">

            <div className="card shadow-lg border-0 p-4 mb-5">

                <h2 className="text-center fw-bold mb-4">
                    Recommended Hotels
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="row">

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                City
                            </label>

                            <input
                                type="text"
                                name="city"
                                className="form-control"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Budget
                            </label>

                            <input
                                type="number"
                                name="budget"
                                className="form-control"
                                value={formData.budget}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Guests
                            </label>

                            <input
                                type="number"
                                name="guests"
                                className="form-control"
                                value={formData.guests}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>

                    <button
                        className="btn btn-primary w-100 mt-3"
                        type="submit"
                    >
                        Get Recommendations
                    </button>

                </form>

            </div>

            {recommendations.length > 0 && (

                <div className="row">

                    {recommendations.map((hotel) => (

                        <div
                            className="col-lg-4 col-md-6 mb-4"
                            key={hotel.hotelId}
                        >

                            <div className="card shadow h-100 border-0">

                                <img
                                    src={hotelImages[hotel.hotelName] || hotelImage}
                                    alt={hotel.hotelName}
                                    className="card-img-top"
                                    style={{
                                        height: "220px",
                                        objectFit: "cover",
                                    }}
                                />

                                <div className="card-body">

                                    <div className="d-flex justify-content-between align-items-center mb-2">

                                        <h4 className="fw-bold mb-0">
                                            {hotel.hotelName}
                                        </h4>

                                        <span className="badge bg-success">
                                            ⭐ {hotel.rating}
                                        </span>

                                    </div>

                                    <p>
                                        📍 {hotel.city}
                                    </p>

                                    <p>
                                        🛏 {hotel.roomType}
                                    </p>

                                    <p>
                                        👥 Capacity : {hotel.capacity}
                                    </p>

                                    <p className="fw-bold text-primary">
                                        ₹ {hotel.price} / Night
                                    </p>

                                    <button
                                        className="btn btn-warning w-100"
                                        onClick={() =>
                                            navigate(`/hotel/${hotel.hotelId}`)
                                        }
                                    >
                                        View Hotel
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

            {recommendations.length === 0 && (

                <div className="text-center text-muted mt-5">

                    <h5>
                        Search hotels to see recommendations.
                    </h5>

                </div>

            )}

        </div>

    );

}

export default RecommendationPage;