import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addHotel } from "../../services/hotelService";
import "./HotelForm.css";

function AddHotel() {

    const navigate = useNavigate();

    const [hotel, setHotel] = useState({
        hotelName: "",
        city: "",
        address: "",
        description: "",
        rating: "",
        imageUrl: ""
    });

    const handleChange = (e) => {

        setHotel({
            ...hotel,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addHotel(hotel);

            alert("Hotel Added Successfully");

            navigate("/admin/hotels");

        } catch (error) {

            console.error(error);

            alert("Failed to Add Hotel");

        }

    };

    return (

        <div className="hotel-form-page">

            <div className="container py-5">

                <div className="hotel-form-card">

                    <h2 className="mb-4">

                        Add Hotel

                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">

                            <label>Hotel Name</label>

                            <input
                                type="text"
                                className="form-control"
                                name="hotelName"
                                value={hotel.hotelName}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="mb-3">

                            <label>City</label>

                            <input
                                type="text"
                                className="form-control"
                                name="city"
                                value={hotel.city}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="mb-3">

                            <label>Address</label>

                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={hotel.address}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="mb-3">

                            <label>Description</label>

                            <textarea
                                className="form-control"
                                rows="4"
                                name="description"
                                value={hotel.description}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-3">

                            <label>Rating</label>

                            <input
                                type="number"
                                step="0.1"
                                className="form-control"
                                name="rating"
                                value={hotel.rating}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-4">

                            <label>Image URL</label>

                            <input
                                type="text"
                                className="form-control"
                                name="imageUrl"
                                value={hotel.imageUrl}
                                onChange={handleChange}
                            />

                        </div>

                        <button
                            className="btn btn-primary w-100"
                        >
                            Save Hotel
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default AddHotel;