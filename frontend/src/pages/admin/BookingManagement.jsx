import { useEffect, useState } from "react";
import {
    getAllAdminBookings,
    cancelAdminBooking
} from "../../services/adminBookingService";

import "./BookingManagement.css";

function BookingManagement() {

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {

        try {

            const response = await getAllAdminBookings();

            setBookings(response.data.data || []);

        } catch (error) {

            console.error("Failed to load bookings:", error);

        } finally {

            setLoading(false);

        }
    };

    const handleCancel = async (bookingId) => {

        const confirmCancel = window.confirm(
            "Are you sure you want to cancel this booking?"
        );

        if (!confirmCancel) return;

        try {

            await cancelAdminBooking(bookingId);

            alert("Booking cancelled successfully");

            loadBookings();

        } catch (error) {

            console.error(error);

            alert("Failed to cancel booking");

        }
    };

    return (

        <div className="booking-management-page">

            <div className="container py-5">

                <div className="booking-page-header mb-4">

                    <h2>Booking Management</h2>

                    <p>
                        Manage customer bookings and reservation status.
                    </p>

                </div>

                <div className="card booking-management-card">

                    <div className="card-header">

                        <h5 className="mb-0">
                            All Bookings
                        </h5>

                        <span className="booking-count">
                            {bookings.length} Bookings
                        </span>

                    </div>

                    {loading ? (

                        <div className="text-center py-5">

                            <div
                                className="spinner-border text-primary"
                                role="status"
                            ></div>

                            <p className="mt-3 text-muted">
                                Loading bookings...
                            </p>

                        </div>

                    ) : bookings.length === 0 ? (

                        <div className="text-center py-5">

                            <h5>No bookings found</h5>

                            <p className="text-muted">
                                There are currently no bookings.
                            </p>

                        </div>

                    ) : (

                        <div className="table-responsive">

                            <table className="table booking-table align-middle mb-0">

                                <thead>

                                    <tr>

                                        <th>ID</th>
                                        <th>Customer</th>
                                        <th>Hotel</th>
                                        <th>Room</th>
                                        <th>Check In</th>
                                        <th>Check Out</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {bookings.map((booking) => (

                                        <tr key={booking.bookingId}>

                                            <td>
                                                <strong>
                                                    #{booking.bookingId}
                                                </strong>
                                            </td>

                                            <td>
                                                {booking.customerName}
                                            </td>

                                            <td>
                                                {booking.hotelName}
                                            </td>

                                            <td>
                                                {booking.roomType}
                                            </td>

                                            <td>
                                                {booking.checkInDate}
                                            </td>

                                            <td>
                                                {booking.checkOutDate}
                                            </td>

                                            <td>
                                                <strong>
                                                    ₹ {booking.totalPrice}
                                                </strong>
                                            </td>

                                            <td>

                                                <span
                                                    className={
                                                        booking.bookingStatus === "CANCELLED"
                                                            ? "status-badge cancelled"
                                                            : "status-badge booked"
                                                    }
                                                >
                                                    {booking.bookingStatus}
                                                </span>

                                            </td>

                                            <td>

                                                {booking.bookingStatus !== "CANCELLED" ? (

                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() =>
                                                            handleCancel(
                                                                booking.bookingId
                                                            )
                                                        }
                                                    >
                                                        Cancel
                                                    </button>

                                                ) : (

                                                    <span className="text-muted">
                                                        Cancelled
                                                    </span>

                                                )}

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    )}

                </div>

            </div>

        </div>

    );
}

export default BookingManagement;