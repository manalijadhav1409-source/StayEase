import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaPhone
} from "react-icons/fa";

import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";

function RegisterForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleRegister = async (e) => {
  e.preventDefault();

    if (!firstName.trim()) {
        alert("First Name is required.");
        return;
    }

    if (!lastName.trim()) {
        alert("Last Name is required.");
        return;
    }

    if (!email.trim()) {
        alert("Email is required.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    if (!phone.trim()) {
        alert("Phone Number is required.");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Phone Number must be 10 digits.");
        return;
    }

    if (!password.trim()) {
        alert("Password is required.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {

        await register({
        firstName,
        lastName,
        email,
        password,
        phone
        });

        alert("Registration Successful!");

        navigate("/login");

    } catch (error) {

        console.error(error);

        alert("Registration Failed.");

    }
    };

  return (

    <div className="login-card shadow-lg">

      <h2 className="text-center mb-3">
        Create Account
      </h2>

      <p className="text-center text-muted login-subtitle">
        Join StayEase and start booking your dream stays today.
      </p>

      <form onSubmit={handleRegister}>

        <div className="mb-3">

          <div className="input-group">

            <span className="input-group-text">
              <FaUser />
            </span>

            <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />

          </div>

        </div>

        <div className="mb-3">

          <div className="input-group">

            <span className="input-group-text">
              <FaUser />
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

          </div>

        </div>

        <div className="mb-3">

          <div className="input-group">

            <span className="input-group-text">
              <FaEnvelope />
            </span>

            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

        </div>


        <div className="mb-3">

        <div className="input-group">

            <span className="input-group-text">
            <FaPhone />
            </span>

            <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />

        </div>

        </div>

        <div className="mb-3">

          <div className="input-group">

            <span className="input-group-text">
              <FaLock />
            </span>

            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Password"
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

        </div>

        <div className="mb-4">

          <div className="input-group">

            <span className="input-group-text">
              <FaLock />
            </span>

            <input
              type={showConfirmPassword ? "text" : "password"}
              className="form-control"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>

        </div>

        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
        >
          Register
        </button>

      </form>

      <div className="text-center mt-4">

        Already have an account?

        <a
          href="/login"
          className="ms-2"
        >
          Login
        </a>

      </div>

    </div>

  );

}

export default RegisterForm;