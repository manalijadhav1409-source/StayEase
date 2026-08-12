import Navbar from "../../components/home/Navbar";
import "./HomePage.css";
import HeroSection from "../../components/home/HeroSection";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllHotels, searchHotels } from "../../services/hotelService";
import SearchBar from "../../components/home/SearchBar";
import FeaturedHotels from "../../components/home/FeaturedHotels";

function HomePage() {

    const navigate = useNavigate();

    const [hotels, setHotels] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {

        loadHotels();

    }, []);

    const loadHotels = async () => {

        try {

            const response = await getAllHotels();

            setHotels(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const handleSearch = async (city) => {

        try {

            const response = await searchHotels(city);

            setHotels(response.data);

        } catch (error) {

            console.error(error);

            alert("No hotels found.");

        }

    };

    return (

        <>

            <Navbar />

            <HeroSection />

            <SearchBar onSearch={handleSearch} />

            <FeaturedHotels hotels={hotels} />

            <div className="container mt-5">

                <h1 className="text-center">

                    Welcome to StayEase

                </h1>

                <p className="text-center text-muted">

                    Your perfect hotel booking experience starts here.

                </p>


            </div>

        </>

    );

}

export default HomePage;