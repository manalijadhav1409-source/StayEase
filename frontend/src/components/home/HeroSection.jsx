import heroBg from "../../assets/images/hero-bg.avif";


function HeroSection() {
  return (
    <section
      className="text-white text-center d-flex align-items-center"
      style={{
        height: "90vh",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="container"
        style={{
          background: "rgba(0,0,0,0.45)",
          padding: "50px",
          borderRadius: "15px",
        }}
      >
        <h1 className="display-3 fw-bold">
          Welcome to StayEase
        </h1>

        <p className="lead mt-3">
          Discover luxury hotels, compare prices and book your
          perfect stay with ease.
        </p>

        <button className="btn btn-warning btn-lg mt-4">
          Explore Hotels
        </button>
      </div>
    </section>
  );
}

export default HeroSection;