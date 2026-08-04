import hotelImage from "../../assets/images/hotel-card.jpg";
import { useNavigate } from "react-router-dom";

function FeaturedHotels({ hotels }) {
    const navigate = useNavigate();
  return (
    <div className="container my-5">

      <h2 className="text-center fw-bold mb-5">
        Featured Hotels
      </h2>

      <div className="row">

        {hotels.map((hotel) => (

          <div className="col-md-4 mb-4" key={hotel.hotelId}>

            <div className="card shadow h-100">

              <img
                src={hotel.imageUrl || hotelImage}
                className="card-img-top"
                alt={hotel.hotelName}
                style={{
                    height: "220px",
                    objectFit: "cover",
                }}
                />

              <div className="card-body">

                <h5 className="card-title fw-bold">
                  {hotel.hotelName}
                </h5>

                <p className="text-muted mb-2">
                  📍 {hotel.city}
                </p>

                <p>
                  ⭐ {hotel.rating}
                </p>

                <p className="card-text">
                  {hotel.description}
                </p>

              </div>

              <div className="card-footer bg-white border-0">

                <button
                    className="btn btn-primary w-100"
                    onClick={() => navigate(`/hotel/${hotel.hotelId}`)}
                >
                    View Details
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default FeaturedHotels;