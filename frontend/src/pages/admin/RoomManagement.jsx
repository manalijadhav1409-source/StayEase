import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    getAllRooms,
    deleteRoom
} from "../../services/roomService";

import "./RoomManagement.css";

function RoomManagement() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        loadRooms();
    }, []);

    const loadRooms = async () => {

        try {

            const response = await getAllRooms();

            setRooms(response.data.data);

        } catch (error) {

            console.error(error);

            alert("Failed to load rooms");

        }

    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this room?"
        );

        if (!confirmDelete) return;

        try {

            await deleteRoom(id);

            alert("Room Deleted Successfully");

            loadRooms();

        } catch (error) {

            console.error(error);

            alert("Unable to delete room");

        }

    };
        return (

        <div className="room-page">

            <div className="container py-5">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h2 className="fw-bold">
                            Room Management
                        </h2>

                        <p className="text-muted">
                            Manage hotel rooms
                        </p>

                    </div>

                    <Link
                        to="/admin/rooms/add"
                        className="btn btn-success"
                    >
                        + Add Room
                    </Link>

                </div>

                <div className="card shadow">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle mb-0">

                            <thead className="table-dark">

                                <tr>

                                    <th>ID</th>
                                    <th>Hotel</th>
                                    <th>Room Type</th>
                                    <th>Price</th>
                                    <th>Capacity</th>
                                    <th>Image</th>
                                    <th>Status</th>
                                    <th>Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {rooms.map((room) => (

                                    <tr key={room.id}>

                                        <td>{room.id}</td>

                                        <td>{room.hotelName}</td>

                                        <td>{room.roomType}</td>

                                        <td>₹ {room.price}</td>

                                        <td>{room.capacity}</td>

                                        <td>

                                            {room.imageUrl ? (

                                                <img
                                                    src={room.imageUrl}
                                                    alt={room.roomType}
                                                    style={{
                                                        width: "100px",
                                                        height: "70px",
                                                        objectFit: "cover",
                                                        borderRadius: "8px"
                                                    }}
                                                />

                                            ) : (

                                                <span className="text-muted">
                                                    No Image
                                                </span>

                                            )}

                                        </td>

                                        <td>

                                            {room.available ? (

                                                <span className="badge bg-success">
                                                    Available
                                                </span>

                                            ) : (

                                                <span className="badge bg-danger">
                                                    Occupied
                                                </span>

                                            )}

                                        </td>

                                        <td>

                                            <div className="d-flex gap-2">

                                                <Link
                                                    to={`/admin/rooms/edit/${room.id}`}
                                                    className="btn btn-warning btn-sm"
                                                >
                                                    ✏️ Edit
                                                </Link>

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleDelete(room.id)}
                                                >
                                                    🗑 Delete
                                                </button>

                                            </div>

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

export default RoomManagement;