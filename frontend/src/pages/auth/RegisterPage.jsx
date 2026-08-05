import RegisterForm from "../../components/auth/RegisterForm";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="login-page">
      <div className="login-left">
        <div className="overlay">

          <h1>StayEase</h1>

          <h2>Join StayEase Today</h2>

          <h4>Your Journey Starts Here</h4>

          <p>
            Create your account and discover premium hotels,
            exclusive offers, and seamless booking experiences.
          </p>

        </div>
      </div>

      <div className="login-right">
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;