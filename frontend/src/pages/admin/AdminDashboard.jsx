import { useEffect, useState } from "react";
import { getDashboardData } from "../../services/adminService";
import "./AdminDashboard.css";

function AdminDashboard() {

    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const response = await getDashboardData();

            setDashboard(response.data.data);

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to load dashboard."
            );

        }

    };

    if (!dashboard) {

        return (
            <div className="text-center mt-5">
                <h3>Loading Dashboard...</h3>
            </div>
        );

    }

    return (

        <div className="container py-5">

            <h1 className="text-center fw-bold mb-5">
                Admin Dashboard
            </h1>

            <div className="row g-4">

                <div className="col-md-4">

                    <div className="dashboard-card bg-primary">

                        <h5>Total Users</h5>

                        <h2>{dashboard.totalUsers}</h2>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="dashboard-card bg-success">

                        <h5>Total Hotels</h5>

                        <h2>{dashboard.totalHotels}</h2>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="dashboard-card bg-warning">

                        <h5>Total Rooms</h5>

                        <h2>{dashboard.totalRooms}</h2>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="dashboard-card bg-info">

                        <h5>Total Bookings</h5>

                        <h2>{dashboard.totalBookings}</h2>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="dashboard-card bg-danger">

                        <h5>Total Payments</h5>

                        <h2>{dashboard.totalPayments}</h2>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="dashboard-card bg-dark">

                        <h5>Total Revenue</h5>

                        <h2>
                            ₹ {dashboard.totalRevenue}
                        </h2>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AdminDashboard;