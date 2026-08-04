import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getHotelById } from "../../services/hotelService";
import { getRoomsByHotel } from "../../services/roomService";

import "./HotelDetailsPage.css";

import hotelImage from "../../assets/images/hotel-card.jpg";
import royalBanner from "../../assets/images/royal-orchid-banner.jpg";
import tajBanner from "../../assets/images/taj-banner.jpg";

import superDeluxeRoom from "../../assets/images/super-deluxe.jpg";
import deluxeRoom from "../../assets/images/deluxe-room.jpg";

function HotelDetailsPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [hotel, setHotel] = useState(null);
    const [rooms, setRooms] = useState([]);

    const hotelImages = {
        "Taj Hotel": tajBanner,
        "Royal Orchid Hotel": royalBanner,
    };

    const roomImages = {
        "Super Deluxe": superDeluxeRoom,
        "Deluxe": deluxeRoom,
    };

    useEffect(() => {
        loadHotel();
    }, [id]);

    const loadHotel = async () => {
        try {

            const response = await getHotelById(id);
            setHotel(response.data);

            const roomResponse = await getRoomsByHotel(id);
            setRooms(roomResponse.data.data);

        } catch (error) {
            console.error(error);
        }
    };

    if (!hotel) {
        return <h2 className="text-center mt-5">Loading...</h2>;
    }

    return (
        <div className="container my-5">

            {/* Hero Banner */}

            <div className="hotel-hero">

                <img
                    src={hotelImages[hotel.hotelName] || hotelImage}
                    alt={hotel.hotelName}
                />

                <div className="hotel-overlay">

                    <div className="hotel-title">

                        <div className="rating-badge">
                            ⭐ {hotel.rating}
                        </div>

                        <h1>{hotel.hotelName}</h1>

                        <p>{hotel.address}</p>

                    </div>

                </div>

            </div>

            {/* About Hotel */}

            <div className="card shadow-sm border-0 p-4 mt-4 mb-5">

                <h4 className="fw-bold mb-3">
                    About Hotel
                </h4>

                <p className="text-muted mb-0">
                    {hotel.description}
                </p>

            </div>

            {/* Available Rooms */}

            <h2 className="section-title mb-4">
                Choose Your Room
            </h2>

            <div className="row">

                {rooms.map((room) => (

                    <div
                        className="col-lg-4 col-md-6 mb-4"
                        key={room.id}
                    >

                        <div className="card room-card shadow h-100">

                            <img
                                src={roomImages[room.roomType] || hotelImage}
                                alt={room.roomType}
                                className="card-img-top"
                                style={{
                                    height: "220px",
                                    objectFit: "cover",
                                }}
                            />

                            <div className="card-body">

                                <h4 className="fw-bold mb-3">
                                    {room.roomType}
                                </h4>

                                <p className="price">
                                    ₹ {room.price}
                                    <span> / Night</span>
                                </p>

                                <p>
                                    Capacity : {room.capacity}
                                </p>

                                <p>Free WiFi</p>

                                <p>Breakfast Included</p>

                                <p>Air Conditioning</p>

                                <span
                                    className={`badge ${
                                        room.available
                                            ? "bg-success"
                                            : "bg-danger"
                                    }`}
                                >
                                    {room.available
                                        ? "Available"
                                        : "Not Available"}
                                </span>

                                <button
                                    className="btn btn-warning w-100 mt-3"
                                    disabled={!room.available}
                                    onClick={() => navigate(`/booking/${room.id}`)}
                                >
                                    BOOK NOW
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default HotelDetailsPage;