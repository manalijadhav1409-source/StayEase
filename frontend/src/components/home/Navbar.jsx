import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">

      <div className="container">

        <Link className="navbar-brand fw-bold fs-3" to="/home">
          StayEase
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbar"
        >

          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/hotels">
                Hotels
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/recommendation">
                Recommendations
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/bookings">
                My Bookings
              </Link>
            </li>

            <li className="nav-item ms-3">

              <button
                className="btn btn-warning"
                onClick={() => {

                  localStorage.removeItem("token");
                  localStorage.removeItem("user");

                  window.location.href = "/login";

                }}
              >
                Logout
              </button>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;