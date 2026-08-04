import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createBooking } from "../../services/bookingService";
import "./BookingPage.css";

function BookingPage() {

    const { roomId } = useParams();
    const navigate = useNavigate();

    const [booking, setBooking] = useState({
        roomId: Number(roomId),
        checkInDate: "",
        checkOutDate: "",
    });

    const handleChange = (e) => {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (booking.checkInDate >= booking.checkOutDate) {
            alert("Check-Out date must be after Check-In date.");
            return;
        }

        try {

            const response = await createBooking(booking);
            console.log("Full Response:", JSON.stringify(response.data, null, 2));
            const bookingData = response.data;

            alert("Booking Successful");

            navigate("/payment", {
                state: {
                    bookingId: bookingData.bookingId,
                    amount: bookingData.totalPrice,
                },
            });

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Booking Failed"
            );

        }

    };

    return (

        <div className="container py-5">

            <div
                className="card shadow-lg border-0 mx-auto"
                style={{ maxWidth: "550px" }}
            >

                <div className="card-body p-4">

                    <h2 className="text-center fw-bold mb-4">
                        Book Your Stay
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">

                            <label className="form-label fw-semibold">
                                Room ID
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                value={booking.roomId}
                                readOnly
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label fw-semibold">
                                Check-In Date
                            </label>

                            <input
                                type="date"
                                name="checkInDate"
                                className="form-control"
                                value={booking.checkInDate}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="mb-4">

                            <label className="form-label fw-semibold">
                                Check-Out Date
                            </label>

                            <input
                                type="date"
                                name="checkOutDate"
                                className="form-control"
                                value={booking.checkOutDate}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <button
                            type="submit"
                            className="btn btn-warning w-100 fw-bold"
                        >
                            Continue Booking
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default BookingPage;