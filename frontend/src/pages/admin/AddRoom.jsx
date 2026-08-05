import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { addRoom } from "../../services/roomService";
import { getAllHotels } from "../../services/hotelService";

import "./RoomForm.css";

function AddRoom() {

    const navigate = useNavigate();

    const [hotels, setHotels] = useState([]);

    const [room, setRoom] = useState({

        hotelId: "",

        roomType: "",

        price: "",

        capacity: "",

        available: true

    });

    useEffect(() => {

        loadHotels();

    }, []);

    const loadHotels = async () => {

        const response = await getAllHotels();

        setHotels(response.data);

    };

    const handleChange = (e) => {

        const { name, value } = e.target;

        setRoom({

            ...room,

            [name]:
                name === "available"
                    ? value === "true"
                    : value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addRoom(room);

            alert("Room Added Successfully");

            navigate("/admin/rooms");

        }

        catch (error) {

            console.error(error);

            alert("Failed To Add Room");

        }

    };

    return (

        <div className="room-form-page">

            <div className="container py-5">

                <div className="room-form-card">

                    <h2 className="mb-4">

                        Add Room

                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">

                            <label>Hotel</label>

                            <select
                                className="form-select"
                                name="hotelId"
                                value={room.hotelId}
                                onChange={handleChange}
                            >

                                <option value="">

                                    Select Hotel

                                </option>

                                {hotels.map((hotel) => (

                                    <option
                                        key={hotel.hotelId}
                                        value={hotel.hotelId}
                                    >

                                        {hotel.hotelName}

                                    </option>

                                ))}

                            </select>

                        </div>

                        <div className="mb-3">

                            <label>Room Type</label>

                            <input
                                className="form-control"
                                name="roomType"
                                value={room.roomType}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-3">

                            <label>Price</label>

                            <input
                                className="form-control"
                                name="price"
                                value={room.price}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-3">

                            <label>Capacity</label>

                            <input
                                className="form-control"
                                name="capacity"
                                value={room.capacity}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-4">

                            <label>Status</label>

                            <select
                                className="form-select"
                                name="available"
                                value={room.available}
                                onChange={handleChange}
                            >

                                <option value={true}>

                                    Available

                                </option>

                                <option value={false}>

                                    Occupied

                                </option>

                            </select>

                        </div>

                        <button className="btn btn-success w-100">

                            Save Room

                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default AddRoom;