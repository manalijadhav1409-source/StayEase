import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { makePayment } from "../../services/paymentService";
import "./PaymentPage.css";

function PaymentPage() {

    const location = useLocation();
    const navigate = useNavigate();

    const { bookingId, amount } = location.state || {};

    const [paymentMethod, setPaymentMethod] = useState("UPI");

    const handlePayment = async () => {

        try {

            const payment = {
                bookingId,
                amount,
                paymentMethod,
            };

            const response = await makePayment(payment);

            console.log(response.data);

            alert("Payment Successful");

            navigate("/home");

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Payment Failed"
            );

        }

    };

    return (

        <div className="container py-5">

            <div
                className="card shadow-lg border-0 mx-auto"
                style={{ maxWidth: "600px" }}
            >

                <div className="card-body p-4">

                    <h2 className="text-center fw-bold mb-4">
                        Payment
                    </h2>

                    <div className="mb-3">

                        <label className="form-label fw-semibold">
                            Booking ID
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={bookingId}
                            readOnly
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label fw-semibold">
                            Amount
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={`₹ ${amount}`}
                            readOnly
                        />

                    </div>

                    <div className="mb-4">

                        <label className="form-label fw-semibold">
                            Payment Method
                        </label>

                        <select
                            className="form-select"
                            value={paymentMethod}
                            onChange={(e) =>
                                setPaymentMethod(e.target.value)
                            }
                        >
                            <option value="UPI">UPI</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="Net Banking">Net Banking</option>
                        </select>

                    </div>

                    <button
                        className="btn btn-success w-100 fw-bold"
                        onClick={handlePayment}
                    >
                        Pay Now
                    </button>

                </div>

            </div>

        </div>

    );

}

export default PaymentPage;