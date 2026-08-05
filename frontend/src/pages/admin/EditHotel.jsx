import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getHotelById,
    updateHotel
} from "../../services/hotelService";

import "./HotelForm.css";

function EditHotel() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [hotel, setHotel] = useState({

        hotelName:"",
        city:"",
        address:"",
        description:"",
        rating:"",
        imageUrl:""

    });

    useEffect(()=>{

        loadHotel();

    },[]);

    const loadHotel = async()=>{

        try{

            const response = await getHotelById(id);

            setHotel(response.data);

        }

        catch(error){

            console.error(error);

        }

    };

    const handleChange=(e)=>{

        setHotel({

            ...hotel,

            [e.target.name]:e.target.value

        });

    };

    const handleSubmit=async(e)=>{

        e.preventDefault();

        try{

            await updateHotel(id,hotel);

            alert("Hotel Updated Successfully");

            navigate("/admin/hotels");

        }

        catch(error){

            console.error(error);

            alert("Update Failed");

        }

    };

    return(

        <div className="hotel-form-page">

            <div className="container">

                <div className="hotel-form-card">

                    <h2>Edit Hotel</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">

                            <label>Hotel Name</label>

                            <input
                                className="form-control"
                                name="hotelName"
                                value={hotel.hotelName}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-3">

                            <label>City</label>

                            <input
                                className="form-control"
                                name="city"
                                value={hotel.city}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-3">

                            <label>Address</label>

                            <input
                                className="form-control"
                                name="address"
                                value={hotel.address}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-3">

                            <label>Description</label>

                            <textarea
                                rows="4"
                                className="form-control"
                                name="description"
                                value={hotel.description}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-3">

                            <label>Rating</label>

                            <input
                                className="form-control"
                                name="rating"
                                value={hotel.rating}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-4">

                            <label>Image URL</label>

                            <input
                                className="form-control"
                                name="imageUrl"
                                value={hotel.imageUrl}
                                onChange={handleChange}
                            />

                        </div>

                        <button className="btn btn-success w-100">

                            Update Hotel

                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default EditHotel;