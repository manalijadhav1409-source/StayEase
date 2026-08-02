function HomePage() {

    const user = JSON.parse(localStorage.getItem("user"));
    const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
};

    return (

        <div className="container mt-5">

            <h1>
                Welcome {user.firstName}
            </h1>

            <h3>
                StayEase Home Page
            </h3>

            <button
                    className="btn btn-danger mt-4"
                    onClick={handleLogout}
                >
                    Logout
            </button>

        </div>

    );

}

export default HomePage;