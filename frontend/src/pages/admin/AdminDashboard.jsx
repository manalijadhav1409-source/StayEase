import "./AdminDashboard.css";
import { useEffect, useState } from "react";
import { getDashboardData } from "../../services/adminService";
import { Link } from "react-router-dom";

function AdminDashboard() {

    const [dashboard, setDashboard] = useState({
        totalUsers: 0,
        totalHotels: 0,
        totalRooms: 0,
        totalBookings: 0,
        totalPayments: 0,
        totalRevenue: 0,
        recentBookings: [],
        recentPayments: [],
        roomAvailability: []
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const response = await getDashboardData();
            console.log(response.data);
            setDashboard(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    return (
        <div className="admin-dashboard-container py-5 bg-light">
            <div className="container">
                <div className="dashboard-welcome p-4 p-lg-5 mb-5 rounded-4 shadow-sm bg-white glass-card">
                    <div className="row align-items-center gy-3">
                        <div className="col-lg-8">
                            <p className="text-uppercase text-secondary mb-2 letter-spacing">Welcome Admin</p>
                            <h1 className="dashboard-welcome-title mb-3">Premium Hotel Management</h1>
                            <p className="text-muted mb-0">Track bookings, payments and room availability with elegant insights and a luxury management experience.</p>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <div className="dashboard-welcome-meta">
                                <span className="badge badge-pill date-chip">{currentDate}</span>
                                <p className="mt-3 mb-1 text-secondary">Quick Overview</p>
                                <div className="overview-pill">Live hotel performance metrics</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mb-5">
                    <div className="col-xl-4 col-md-6">
                        <div className="card stat-card glass-card gradient-breeze shadow-sm border-0">
                            <div className="card-body d-flex align-items-center justify-content-between gap-3">
                                <div>
                                    <p className="text-upper stat-label mb-2">Total Users</p>
                                    <h2 className="stat-value">{dashboard.totalUsers}</h2>
                                </div>
                                <div className="stat-icon icon-royal text-white shadow-sm">
                                    <i className="bi bi-people-fill"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <div className="card stat-card glass-card gradient-sunrise shadow-sm border-0">
                            <div className="card-body d-flex align-items-center justify-content-between gap-3">
                                <div>
                                    <p className="text-upper stat-label mb-2">Total Hotels</p>
                                    <h2 className="stat-value">{dashboard.totalHotels}</h2>
                                </div>
                                <div className="stat-icon icon-emerald text-white shadow-sm">
                                    <i className="bi bi-building"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <div className="card stat-card glass-card gradient-midnight shadow-sm border-0">
                            <div className="card-body d-flex align-items-center justify-content-between gap-3">
                                <div>
                                    <p className="text-upper stat-label mb-2">Total Rooms</p>
                                    <h2 className="stat-value">{dashboard.totalRooms}</h2>
                                </div>
                                <div className="stat-icon icon-sapphire text-white shadow-sm">
                                    <i className="bi bi-door-open-fill"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <div className="card stat-card glass-card gradient-amber shadow-sm border-0">
                            <div className="card-body d-flex align-items-center justify-content-between gap-3">
                                <div>
                                    <p className="text-upper stat-label mb-2">Total Bookings</p>
                                    <h2 className="stat-value">{dashboard.totalBookings}</h2>
                                </div>
                                <div className="stat-icon icon-amber text-white shadow-sm">
                                    <i className="bi bi-calendar-check-fill"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <div className="card stat-card glass-card gradient-rose shadow-sm border-0">
                            <div className="card-body d-flex align-items-center justify-content-between gap-3">
                                <div>
                                    <p className="text-upper stat-label mb-2">Total Payments</p>
                                    <h2 className="stat-value">{dashboard.totalPayments}</h2>
                                </div>
                                <div className="stat-icon icon-rose text-white shadow-sm">
                                    <i className="bi bi-wallet2"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <div className="card stat-card glass-card gradient-emerald shadow-sm border-0">
                            <div className="card-body d-flex align-items-center justify-content-between gap-3">
                                <div>
                                    <p className="text-upper stat-label mb-2">Total Revenue</p>
                                    <h2 className="stat-value">₹ {dashboard.totalRevenue}</h2>
                                </div>
                                <div className="stat-icon icon-gold text-white shadow-sm">
                                    <i className="bi bi-currency-dollar"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row mt-4 mb-5">

                    <div className="col-md-6">

                        <Link
                            to="/admin/hotels"
                            className="btn btn-primary w-100 py-3 fw-bold"
                        >
                            🏨 Manage Hotels
                        </Link>

                    </div>

                    <div className="col-md-6">

                        <Link
                            to="/admin/rooms"
                            className="btn btn-success w-100 py-3 fw-bold"
                        >
                            🛏 Manage Rooms
                        </Link>

                    </div>

                </div>
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="card dashboard-card glass-card shadow-sm border-0 overflow-hidden">
                            <div className="card-header border-0 bg-transparent px-4 py-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                <div>
                                    <h5 className="mb-1">Recent Bookings</h5>
                                    <p className="text-muted mb-0">Latest reservation activity across premium suites.</p>
                                </div>
                                <span className="badge badge-pill badge-soft-primary">Real-time view</span>
                            </div>
                            <div className="card-body px-0 py-0">
                                <div className="table-responsive overflow-hidden">
                                    <table className="table table-borderless align-middle mb-0 admin-table">
                                        <thead className="table-sticky text-muted small">
                                            <tr>
                                                <th className="ps-4">ID</th>
                                                <th>Customer</th>
                                                <th>Hotel</th>
                                                <th>Room</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dashboard.recentBookings.map((booking) => (
                                                <tr key={booking.bookingId}>
                                                    <td className="ps-4 text-primary fw-semibold">{booking.bookingId}</td>
                                                    <td>{booking.customerName}</td>
                                                    <td>{booking.hotelName}</td>
                                                    <td>{booking.roomType}</td>
                                                    <td className="fw-semibold">₹ {booking.totalPrice}</td>
                                                    <td>
                                                        <span className={`badge badge-pill ${booking.bookingStatus === "BOOKED" ? "badge-soft-success" : "badge-soft-danger"}`}>
                                                            {booking.bookingStatus}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mt-1">
                    <div className="col-lg-6">
                        <div className="card dashboard-card glass-card shadow-sm border-0 overflow-hidden">
                            <div className="card-header border-0 bg-transparent px-4 py-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                <div>
                                    <h5 className="mb-1">Recent Payments</h5>
                                    <p className="text-muted mb-0">Secure payment collection and refund monitoring.</p>
                                </div>
                                <span className="badge badge-pill badge-soft-success">Verified</span>
                            </div>
                            <div className="card-body px-0 py-0">
                                <div className="table-responsive overflow-hidden">
                                    <table className="table table-borderless align-middle mb-0 admin-table">
                                        <thead className="table-sticky text-muted small">
                                            <tr>
                                                <th className="ps-4">ID</th>
                                                <th>Customer</th>
                                                <th>Amount</th>
                                                <th>Method</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dashboard.recentPayments.map((payment) => (
                                                <tr key={payment.paymentId}>
                                                    <td className="ps-4 text-primary fw-semibold">{payment.paymentId}</td>
                                                    <td>{payment.customerName}</td>
                                                    <td className="fw-semibold">₹ {payment.amount}</td>
                                                    <td>{payment.paymentMethod}</td>
                                                    <td>
                                                        <span className={`badge badge-pill ${payment.paymentStatus === "SUCCESS" ? "badge-soft-success" : "badge-soft-danger"}`}>
                                                            {payment.paymentStatus}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card dashboard-card glass-card shadow-sm border-0 overflow-hidden">
                            <div className="card-header border-0 bg-transparent px-4 py-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                <div>
                                    <h5 className="mb-1">Room Availability</h5>
                                    <p className="text-muted mb-0">Current status for high-end room inventory.</p>
                                </div>
                                <span className="badge badge-pill badge-soft-secondary">Capacity</span>
                            </div>
                            <div className="card-body px-0 py-0">
                                <div className="table-responsive overflow-hidden">
                                    <table className="table table-borderless align-middle mb-0 admin-table">
                                        <thead className="table-sticky text-muted small">
                                            <tr>
                                                <th className="ps-4">Hotel</th>
                                                <th>Room</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dashboard.roomAvailability.map((room) => (
                                                <tr key={room.roomId}>
                                                    <td className="ps-4 text-primary fw-semibold">{room.hotelName}</td>
                                                    <td>{room.roomType}</td>
                                                    <td className="fw-semibold">₹ {room.price}</td>
                                                    <td>
                                                        {room.available ? (
                                                            <span className="badge badge-pill badge-soft-success">Available</span>
                                                        ) : (
                                                            <span className="badge badge-pill badge-soft-danger">Occupied</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AdminDashboard;
