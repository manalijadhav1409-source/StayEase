import LoginForm from "../../components/auth/LoginForm";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-left">
        <div className="overlay">
          <h1>StayEase</h1>

          <h2>Luxury Hotel Booking</h2>

          <h4>Made Simple</h4>

          <p>
            Discover premium hotels, exclusive offers,
            comfortable stays and unforgettable travel experiences
            across India.
          </p>
        </div>
      </div>

      <div className="login-right">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;