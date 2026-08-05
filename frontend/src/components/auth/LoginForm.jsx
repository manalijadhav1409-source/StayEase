import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  if (!email.trim()) {
    alert("Email is required.");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

   if (!password.trim()) {
    alert("Password is required.");
    return;
  }

  try {
    const response = await login({
      email,
      password,
    });

    const user = response.data.data;

      localStorage.setItem("token", user.token);
      localStorage.setItem("user", JSON.stringify(user));

    navigate("/home");

  } catch (error) {
    console.error(error);

    alert("Invalid email or password");
  }
};
  return (
    <div className="login-card shadow-lg">

        <h2 className="text-center mb-3">
            Welcome Back!
        </h2>

        <p className="text-center text-muted login-subtitle">
            Sign in to access your bookings,
            discover premium hotels,
            and enjoy a seamless travel experience.
        </p>

      <form onSubmit={handleLogin}>

        <div className="mb-3">

          

          <div className="input-group">

            <span className="input-group-text">
              <FaEnvelope />
            </span>

            <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          </div>

        </div>

        <div className="mb-4">

          <label className="form-label">
          Password
        </label>

        <div className="input-group">

          <span className="input-group-text">
            <FaLock />
          </span>

         <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

        <div className="d-flex justify-content-end mt-2 mb-3">
          <a href="#" className="forgot-link">
            Forgot Password?
          </a>
        </div>

              

        </div>

        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
        >
          Login
        </button>

      </form>
     

      <div className="text-center mt-4">

        Don't have an account?

        <a
          href="/register"
          className="ms-2"
        >
          Register
        </a>

      </div>

    </div>
  );
}

export default LoginForm;