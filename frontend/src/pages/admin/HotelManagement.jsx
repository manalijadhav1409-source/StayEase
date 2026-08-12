import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    getAllHotels,
    deleteHotel
} from "../../services/hotelService";

import "./HotelManagement.css";

function HotelManagement() {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {

        loadHotels();

    }, []);

    const loadHotels = async () => {

        try {

            const response = await getAllHotels();

            setHotels(response.data);

        } catch (error) {

            console.error(error);

            alert("Failed to load hotels.");

        }

    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this hotel?"
        );

        if (!confirmDelete) return;

        try {

            await deleteHotel(id);

            alert("Hotel Deleted Successfully");

            loadHotels();

        } catch (error) {

            console.error(error);

            alert("Unable to delete hotel.");

        }

    };

    return (

        <div className="hotel-management-page">

            <div className="container py-5">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h2 className="fw-bold">

                            Hotel Management

                        </h2>

                        <p className="text-muted">

                            Manage all hotels from one place

                        </p>

                    </div>

                    <Link
                        to="/admin/hotels/add"
                        className="btn btn-primary"
                    >

                        + Add Hotel

                    </Link>

                </div>

                <div className="card shadow">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle mb-0">

                            <thead className="table-dark">

                                <tr>

                                    <th>ID</th>

                                    <th>Hotel</th>

                                    <th>City</th>

                                    <th>Rating</th>

                                    <th>Address</th>

                                    <th>Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {hotels.map((hotel) => (

                                    <tr key={hotel.hotelId}>

                                        <td>

                                            {hotel.hotelId}

                                        </td>

                                        <td>

                                            {hotel.hotelName}

                                        </td>

                                        <td>

                                            {hotel.city}

                                        </td>

                                        <td>

                                            ⭐ {hotel.rating}

                                        </td>

                                        <td>

                                            {hotel.address}

                                        </td>

                                        <td>

                                            <td>

                                        <div className="d-flex gap-2">

                                            <Link
                                                to={`/admin/hotels/edit/${hotel.hotelId}`}
                                                className="btn btn-warning btn-sm"
                                            >
                                                ✏️ Edit
                                            </Link>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(hotel.hotelId)}
                                            >
                                                🗑 Delete
                                            </button>

                                        </div>

</td>
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default HotelManagement;