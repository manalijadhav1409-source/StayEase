import { useEffect, useState } from "react";
import {
    getMyBookings,
    cancelBooking
} from "../../services/bookingService";

import "./MyBookingsPage.css";

function MyBookingsPage() {

    const [bookings, setBookings] = useState([]);

    const loadBookings = async () => {

        try {

            const response = await getMyBookings();

            setBookings(response.data);

        } catch (error) {

            console.error(error);

            alert("Failed to load bookings.");

        }

    };

    useEffect(() => {

        loadBookings();

    }, []);

    const handleCancel = async (bookingId) => {

        const confirmBooking = window.confirm(
            "Are you sure you want to cancel this booking?"
        );

        if (!confirmBooking) return;

        try {

            await cancelBooking(bookingId);

            alert("Booking Cancelled Successfully");

            loadBookings();

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to cancel booking."
            );

        }

    };

    return (

        <div className="container py-5">

            <h2 className="text-center mb-4 fw-bold">
                My Bookings
            </h2>

            {bookings.length === 0 ? (

                <div className="alert alert-info text-center">

                    No Bookings Found

                </div>

            ) : (

                <div className="table-responsive">

                   <div className="row">

    {bookings.map((booking) => (

        <div
            className="col-lg-6 mb-4"
            key={booking.bookingId}
        >

            <div className="card booking-card shadow border-0">

                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center mb-3">

                        <h4 className="fw-bold text-primary">

                            {booking.hotelName}

                        </h4>

                        <span
                            className={`badge ${
                                booking.bookingStatus === "BOOKED"
                                    ? "bg-success"
                                    : "bg-danger"
                            }`}
                        >
                            {booking.bookingStatus}
                        </span>

                    </div>

                    <p>

                        <strong>🏨 Room :</strong>

                        {" "}

                        {booking.roomType}

                    </p>

                    <p>

                        <strong>📅 Check In :</strong>

                        {" "}

                        {booking.checkInDate}

                    </p>

                    <p>

                        <strong>📅 Check Out :</strong>

                        {" "}

                        {booking.checkOutDate}

                    </p>

                    <p>

                        <strong>🌙 Days :</strong>

                        {" "}

                        {booking.totalDays}

                    </p>

                    <p>

                        <strong>💰 Amount :</strong>

                        ₹ {booking.totalPrice}

                    </p>

                    {booking.bookingStatus === "BOOKED" && (

                        <button
                            className="btn btn-danger w-100 mt-3"
                            onClick={() =>
                                handleCancel(booking.bookingId)
                            }
                        >
                            Cancel Booking
                        </button>

                    )}

                </div>

            </div>

        </div>

    ))}

</div>

                </div>

            )}

        </div>

    );

}

export default MyBookingsPage;